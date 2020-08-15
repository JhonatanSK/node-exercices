import Sequelize from 'sequelize';

import Example from '../app/models/Example';

import databaseConfig from '../config/database';

const models = [Example];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
