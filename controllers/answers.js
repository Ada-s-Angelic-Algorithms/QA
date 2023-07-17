const { Answer } = require('../models');

module.exports = {
  getAllAnswers: (req, res) => {
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
  markAAsHelpful: (req, res) => {
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
  },
  addAnswer: (req, res) => {
    const questionID = req.params.question_id
    const answerData = req.body;
    const date_written = new Date().getTime()
    answerData.question_id = questionID;
    answerData.date_written = date_written;
    Answer.create(answerData)
      .then(answer => {
        res.status(201).json(answer);
      })
      .catch (err => {
        console.error(err);
        res.status(500).send('Error adding answer to question');
      })

  },
  reportAnswer: (req, res) => {
    const answerId = req.params.answer_id;

    Answer.update({ reported: true }, { where: { id: answerId } })
      .then(() => {
        res.send('Answer reported successfully');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error reporting answer in database');
      });
  }
};
