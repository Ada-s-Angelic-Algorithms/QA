const controllers = require('./controllers');
var router = require('express').Router();


router.get('/qa/questions', controllers.questions.getAll);
router.put('/qa/questions/:question_id/helpful', controllers.questions.markAsHelpful);

router.get('/qa/questions/:question_id/answers', controllers.answers.getAll);
router.put('/qa/answers/:answer_id/helpful', controllers.answers.markAsHelpful);

module.exports = router;