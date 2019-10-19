import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class DetailMeetupController {
  async index(req, res) {
    const meetup = await Meetup.findByPk(req.params.id, {
      where: { organizer_id: req.userId },
      order: ['date'],
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

    return res.json(meetup);
  }
}

export default new DetailMeetupController();
