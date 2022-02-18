const { Router } = require('express');

const {
  getNotes,
  postNote,
  getOneNote,
  deleteNote,
  updateNote,
} = require('../controllers/notes.controller');

const router = Router();

router.route('/')
  .get(getNotes)
  .post(postNote);

router.route('/:id')
  .get(getOneNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
