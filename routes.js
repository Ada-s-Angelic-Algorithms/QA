const controllers = require('./controllers');
var router = require('express').Router();

// View questions
router.get('/qa/questions', controllers.questions.getAllQuestions);

// Get answer List for a question
router.get('/qa/questions/:question_id/answers', controllers.answers.getAllAnswers);

// Mark a question as helpful
router.put('/qa/questions/:question_id/helpful', controllers.questions.markQAsHelpful);

// Report a question
router.put('/qa/questions/:question_id/report', controllers.questions.reportQuestion);

// Add a question
router.post('/qa/questions', controllers.questions.addQuestion);

// Add an answer to a question
router.post('/qa/questions/:question_id/answers', controllers.answers.addAnswer);

// Mark an answer as helpful
router.put('/qa/answers/:answer_id/helpful', controllers.answers.markAAsHelpful);

// Report an answer
router.put('/qa/answers/:answer_id/report', controllers.answers.reportAnswer);

//Find Product by ID
router.get('/products/:productID', controllers.products.getProduct);

module.exports = router;
