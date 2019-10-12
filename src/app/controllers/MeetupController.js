import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, isAfter } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: { organizer_id: req.userId },
      order: ['date'],
      attributes: ['id', 'title', 'description', 'location', 'date'],
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      organizer_id: Yup.number().required(),
      banner_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const meetupDateStart = startOfHour(parseISO(req.body.date));

    if (isBefore(meetupDateStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const meetup = await Meetup.create(req.body);

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const meetup = await Meetup.findByPk(req.params.id);

    if (req.userId !== meetup.organizer_id) {
      return res
        .status(401)
        .json({ error: 'Only the organizer can make the change' });
    }
    const organizerUpdate = req.body.organizer_id;

    if (organizerUpdate && organizerUpdate !== meetup.organizer_id) {
      return res
        .status(401)
        .json({ error: 'Change meetup organizer not allowed' });
    }

    const meetupDateStart = startOfHour(parseISO(req.body.date));

    if (isBefore(meetupDateStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    await meetup.update(req.body);

    const meetupFind = await Meetup.findByPk(req.params.id, {
      attributes: ['title', 'description', 'location', 'date'],
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(meetupFind);
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (req.userId !== meetup.organizer_id) {
      return res.status(401).json({ error: 'Not an organizer' });
    }

    const meetupDateStart = startOfHour(meetup.date);

    if (isBefore(meetupDateStart, new Date())) {
      return res
        .status(400)
        .json({ error: 'Deleting past meetup is not allowed' });
    }

    meetup.destroy();

    return res.json();
  }
}

export default new MeetupController();
