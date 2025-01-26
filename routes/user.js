const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/user");
const router = express.Router();

// Display all user names in HTML

router.route("/")
 .get(handleGetAllUsers)
 .post(handleCreateUser);

// Routes for /api/users/:id
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);
// Add a new user

module.exports = router;
