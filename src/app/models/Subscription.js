import { Model, Sequelize } from 'sequelize';

class Subscription extends Model {
  static init(sequelize) {
    super.init(
      {
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'participant_id',
      as: 'participant',
    });
    this.belongsTo(models.Meetup, { foreignKey: 'meetup_id', as: 'meetup' });
  }
}

export default Subscription;
