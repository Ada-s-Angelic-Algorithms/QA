const { Question } = require('../models');

module.exports = {
getAllQuestions: (req, res) => {
    const productId = req.query.product_id;
    const count = parseInt(req.query.count) || 5;
    const page = parseInt(req.query.page) || 1;
    //offset starts at 0
    const offset = (page - 1) * count;
    Question.findAll({
      where: { product_id: productId },
      limit: count,
      offset: offset })
      .then(questions => {
        const renamedQuestions = questions.map(question => {
          // Convert instance into plain object
          let questionObj = question.get({ plain: true });

          questionObj.question_body = questionObj.body;
          delete questionObj.body;

          return questionObj;
        });
        res.json({ results: renamedQuestions });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error retrieving questions from database');
      });
  },
  markQAsHelpful: (req, res) => {
    const questionId = req.params.question_id;
    Question.findOne({ where: { question_id: questionId } })
      .then(question => {
        return question.increment('question_helpfulness', { by: 1 })
      })
      .then(() => {
        res.send('Question helpfulness count incremented');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error updating question helpfulness in database');
      });
  },

  addQuestion: (req, res) => {
    const newQuestion = req.body;
    const date_written = new Date().getTime() //Unix Timestamp
    newQuestion.date_written = date_written;
    // newQuestion.question_body = newQuestion.body;
    // delete newQuestion.body;
    Question.create(newQuestion)
      .then(question => {
        res.status(201).send('Question created successfully');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error creating question in the database');
      });
  },

  reportQuestion: (req, res) => {
    const questionId = req.params.question_id;
    Question.findOne({ where: { question_id: questionId } })
      .then(question => {
        if (!question) {
          return res.status(404).send('Question not found');
        }
        return question.update({ reported: true })
      })
      .then(() => {
        res.send('Question reported successfully');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error reporting question in the database');
      });
  }
};
