import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';

import SubscriptionMail from '../jobs/SubscriptionMail';
import Queue from '../../lib/Queue';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: { participant_id: req.userId, canceled_at: null },
      attributes: ['id', 'created_at'],
      include: [
        {
          model: User,
          as: 'participant',
          attributes: ['name', 'email'],
        },
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['title', 'description', 'location', 'date'],
          order: ['date'],
          include: [
            {
              model: User,
              as: 'organizer',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup does not exist' });
    }

    if (req.userId === meetup.organizer_id) {
      return res
        .status(401)
        .json({ error: 'Registration not allowed for organizer' });
    }

    if (meetup.past === true) {
      return res
        .status(401)
        .json({ error: 'Enrollment not allowed for past meetup' });
    }

    const subscriptions = await Subscription.findOne({
      where: {
        participant_id: req.userId,
        meetup_id: req.params.meetupId,
        canceled_at: null,
      },
    });

    if (subscriptions) {
      return res.status(401).json({ error: 'Registration already made' });
    }

    const checkMeetupEqualDate = await Subscription.findOne({
      where: { participant_id: req.userId, canceled_at: null },
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: { date: meetup.date },
        },
      ],
    });

    if (checkMeetupEqualDate) {
      return res.status(401).json({ error: 'Duplication of schedules' });
    }

    const subscription = await Subscription.create({
      participant_id: req.userId,
      meetup_id: req.params.meetupId,
    });

    const registered = await User.findByPk(req.userId, {
      attributes: ['name', 'email'],
    });

    await Queue.add(SubscriptionMail.key, {
      meetup,
      registered,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'participant',
          attributes: ['name', 'email'],
        },
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['title', 'description', 'location', 'date'],
          include: [
            {
              model: User,
              as: 'organizer',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
    });

    if (!subscription) {
      return res.status(400).json({ error: 'Subscription does not exist' });
    }

    if (subscription.canceled_at !== null) {
      return res.status(401).json({
        error: 'Subscription is already canceled',
      });
    }

    if (subscription.meetup.past === true) {
      return res
        .status(401)
        .json({ error: 'Unsubscribing from a past group is not allowed' });
    }

    subscription.canceled_at = new Date();

    subscription.save();

    return res.json(subscription);
  }
}

export default new SubscriptionController();
