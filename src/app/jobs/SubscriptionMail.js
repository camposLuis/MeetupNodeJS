import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, registered } = data;

    await Mail.sendMail({
      to: `${meetup.organizer.name} <${meetup.organizer.email}>`,
      subject: 'Inscrição confirmada',
      template: 'subscription',
      context: {
        organizer: meetup.organizer.name,
        participant: registered.name,
        email: registered.email,
        title: meetup.title,
        date: format(
          parseISO(meetup.date),
          "'dia'  dd 'de' MMMM' às' H:mm'h'",
          {
            locale: pt,
          }
        ),
        location: meetup.location,
      },
    });
  }
}

export default new SubscriptionMail();
