import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class DetailMeetupController {
  async index(req, res) {
    const meetup = await Meetup.findOne({
      where: { id: req.params.id },
      attributes: ['past', 'id', 'title', 'description', 'location', 'date'],
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

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (req.userId !== meetup.organizer.id) {
      return res.status(401).json({ error: 'Not an organizer' });
    }

    return res.json(meetup);
  }
}

export default new DetailMeetupController();
