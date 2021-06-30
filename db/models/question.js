'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function (models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: 'userId' })
    Question.hasMany(models.QuestionVote, { foreignKey: 'questionId' })
    Question.hasMany(models.Answer, { foreignKey: 'questionId' })
  };
  return Question;
};
