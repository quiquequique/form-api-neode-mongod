const { Router } = require('express');

const { getUsers, postUser, deleteUser } = require('../controllers/users.controller');

const router = Router();

router.route('/')
  .get(getUsers)
  .post(postUser);

router.route('/:id')
  .delete(deleteUser);

module.exports = router;
