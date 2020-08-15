import Sequelize, { Model } from 'sequelize';

class Example extends Model {
  static init(sequelize) {
    super.init(
      {
        //Attributes
        name: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        //Methods
        sequelize,
      }
    );

    return this;
  }
}

export default Example;
