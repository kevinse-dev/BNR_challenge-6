"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "user_games",
      [
        {
          userId: 1,
          username: "jhon Doe",
          email: "jhon@gmail.com",
          password: "jhon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_games", null, {});
  },
};
