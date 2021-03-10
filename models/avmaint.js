'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avmaint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  avmaint.init({
    acmodel: DataTypes.STRING,
    engmodel: DataTypes.STRING,
    ttaf: DataTypes.INTEGER,
    ttsn: DataTypes.INTEGER,
    smoh: DataTypes.INTEGER,
    annualinsp: DataTypes.BOOLEAN,
    awdirectives: DataTypes.BOOLEAN,
    damagehist: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'avmaint',
  });
  return avmaint;
};