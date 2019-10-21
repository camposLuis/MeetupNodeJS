import Meetup from '../models/Meetup';
import User from '../models/User';
import Subscription from '../models/Subscription';
import File from '../models/File';

class SubscriptionMeetupController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      attributes: ['id'],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: { id: req.params.id },
          attributes: [
            'past',
            'id',
            'title',
            'description',
            'location',
            'date',
          ],
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
        },
      ],
    });

    const data = {
      amount: subscriptions.length,
      subscriptions,
    };

    return res.json(data);
  }
}

export default new SubscriptionMeetupController();
