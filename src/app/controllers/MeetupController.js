// import * as Yup from 'yup';
import Meetup from '../models/Meetup';
// import User from '../models/User';
// import File from '../models/File';

class MeetupController {
  async store(req, res) {
    const meetup = await Meetup.create(req.body);

    return res.json(meetup);
  }
}

export default new MeetupController();
