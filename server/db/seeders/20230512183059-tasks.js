const { Task } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Task.bulkCreate([
      {
        userId: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
      {
        userId: 1,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        userId: 1,
        title: 'et porro tempora',
        completed: true,
      },
      {
        userId: 1,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false,
      },
      {
        userId: 1,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: false,
      },
      {
        userId: 1,
        title: 'illo expedita consequatur quia in',
        completed: false,
      },
      {
        userId: 1,
        title: 'quo adipisci enim quam ut ab',
        completed: true,
      },
      {
        userId: 1,
        title: 'molestiae perspiciatis ipsa',
        completed: false,
      },
      {
        userId: 1,
        title: 'illo est ratione doloremque quia maiores aut',
        completed: true,
      },
      {
        userId: 1,
        title: 'vero rerum temporibus dolor',
        completed: true,
      },
      {
        userId: 1,
        title: 'ipsa repellendus fugit nisi',
        completed: true,
      },
      {
        userId: 1,
        title: 'et doloremque nulla',
        completed: false,
      },
      {
        userId: 1,
        title: 'repellendus sunt dolores architecto voluptatum',
        completed: true,
      },
      {
        userId: 1,
        title: 'ab voluptatum amet voluptas',
        completed: true,
      },
    ]);
  },

  async down() {
    await Task.destroy({ truncate: { cascade: true } });
  },
};
