import { Model, Sequelize } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        location: Sequelize.STRING,
        date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'organizer_id',
      as: 'organizer',
    });
    this.belongsTo(models.File, {
      foreignKey: 'banner_id',
      as: 'banner',
    });
  }
}

export default Meetup;
