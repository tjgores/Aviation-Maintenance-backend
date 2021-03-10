'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('avmaint', [{
    
    acmodel: "A35",
    engmodel: "O-470",
    ttaf: 2200,
    ttsn: 2200,
    smoh: 600,
    annualinsp: true,
    awdirectives: true,
    damagehist: false
  },
  {
    acmodel: "C172",
    engmodel: "O-320",
    ttaf: 3300,
    ttsn: 3200,
    smoh: 1000,
    annualinsp: true,
    awdirectives: true,
    damagehist: false
  },
  {
    acmodel: "C150",
    engmodel: "O-235",
    ttaf: 5500,
    ttsn: 3200,
    smoh: 2000,
    annualinsp: true,
    awdirectives: true,
    damagehist: true
  },
  {
    acmodel: "C195",
    engmodel: "R-670",
    ttaf: 5700,
    ttsn: 3200,
    smoh: 1800,
    annualinsp: true,
    awdirectives: true,
    damagehist: true
  },
  {
    acmodel: "C180",
    engmodel: "O-470",
    ttaf: 5100,
    ttsn: 2200,
    smoh: 2200,
    annualinsp: true,
    awdirectives: true,
    damagehist: true
  },
  {
    acmodel: "PA28",
    engmodel: "O-320",
    ttaf: 4300,
    ttsn: 2200,
    smoh: 2200,
    annualinsp: true,
    awdirectives: true,
    damagehist: false
  },
  {
    acmodel: "J3",
    engmodel: "C65",
    ttaf: 4300,
    ttsn: 3500,
    smoh: 1500,
    annualinsp: true,
    awdirectives: true,
    damagehist: true
  },
  {
    acmodel: "M20",
    engmodel: "O-360",
    ttaf: 2800,
    ttsn: 2800,
    smoh: 700,
    annualinsp: true,
    awdirectives: true,
    damagehist: false
  },

], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
