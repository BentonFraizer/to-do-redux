const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {}
  }
  Task.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      completed: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      userId: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
