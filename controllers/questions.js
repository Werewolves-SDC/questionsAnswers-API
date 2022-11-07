/* eslint-disable camelcase */
// import models
const models = require('../models/questions.js');
// take the info from the req and invokes the models
const getAllQs = (req, res) => {
  const { product_id, page, count } = req.query;
  // invoke model to update/request data'
  models
    .getAllQuestions(product_id, page, count)
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
};

const addQuestion = (req, res) => {
  models
    .addQuestion(req.body)
    .then((data) => res.status(201).send(data))
    .catch((err) => res.sendStatus(400));
};

// const addAnswer = (req, res) => {

// }

const updateQuestionHelpful = (req, res) => {
  models
    .updateQHelpful(req.params.question_id)
    .then((data) => res.sendStatus(204))
    .catch((err) => res.sendStatus(400));
};

const updateQuestionReport = (req, res) => {
  models
    .updateQReport(req.params.question_id)
    .then((data) => res.sendStatus(204))
    .catch((err) => res.sendStatus(400));
};
module.exports = {
  getAllQs,
  addQuestion,
  updateQuestionHelpful,
  updateQuestionReport,
};