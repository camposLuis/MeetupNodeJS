import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
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

    const {
      title,
      description,
      location,
      date,
      organizer,
      banner,
    } = await Meetup.findByPk(req.params.id, {
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

    return res.json({
      title,
      description,
      location,
      date,
      organizer,
      banner,
    });
  }
}

export default new MeetupController();
