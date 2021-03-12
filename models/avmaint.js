'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avmaint = sequelize.define('Avmaint', {
    acmodel: DataTypes.STRING,
    engmodel: DataTypes.STRING,
    ttaf: DataTypes.INTEGER,
    ttsn: DataTypes.INTEGER,
    smoh: DataTypes.INTEGER,
    annualinsp: DataTypes.BOOLEAN,
    awdirectives: DataTypes.BOOLEAN,
    damagehist: DataTypes.BOOLEAN
  }, {});
  return Avmaint;
};