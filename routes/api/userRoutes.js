const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  removeUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//http://localhost:3001/api/users/1212kdfj/friends/9485ksdjf
router.route('/:userId/friends/:friendId').post(addUserFriend).delete(removeUserFriend)
module.exports = router;
