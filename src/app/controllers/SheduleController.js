import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class SheduleController {
  async index(req, res) {
    const { date, page } = req.query;
    const perPage = 4;

    const parsedDate = parseISO(date);

    const meetupsFull = await Meetup.findAll({
      where: {
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
    });

    const meetups = await Meetup.findAll({
      where: {
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
          [Op.gt]: new Date(),
        },
      },
      order: ['date'],
      attributes: ['id', 'title', 'description', 'location', 'date'],
      limit: perPage,
      offset: (page - 1) * perPage,
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      schedules: meetups,
      pages: Math.ceil(meetupsFull.length / perPage),
    });
  }
}

export default new SheduleController();
