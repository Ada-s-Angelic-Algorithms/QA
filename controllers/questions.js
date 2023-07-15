const { Question } = require('../models');

module.exports = {
  getAll: (req, res) => {
    const productId = req.query.product_id;
    Question.findAll({ where: { product_id: productId } })
      .then(questions => {
        res.json({ results: questions });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error retrieving questions from database');
      });
  },
  markAsHelpful: (req, res) => {
    const questionId = req.params.question_id;
    Question.findOne({ where: { id: questionId } })
      .then(question => {
        return question.increment('helpful', { by: 1 })
      })
      .then(() => {
        res.send('Question helpfulness count incremented');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error updating question helpfulness in database');
      });
  }
};
