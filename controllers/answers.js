const { Answer } = require('../models');

module.exports = {
  getAll: (req, res) => {
    const questionId = req.params.question_id;
    Answer.findAll({ where: { question_id: questionId } })
      .then(answers => {
        res.json({ results: answers });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error retrieving answers from database');
      });
  },
  markAsHelpful: (req, res) => {
    const answerId = req.params.answer_id;
    Answer.findOne({ where: { id: answerId } })
      .then(answer => {
        return answer.increment('helpful', { by: 1 })
      })
      .then(() => {
        res.send('Answer helpfulness count incremented');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error updating answer helpfulness in database');
      });
  }
};
