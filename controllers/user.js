
const user = require("../models/user"); // Import the User model

async function handleGetAllUsers(req, res) {    
    const allDBUsers = await user.find({});
    res.json(allDBUsers);
}
async function handleGetUserById(req, res) {
    const user = await user.findById(req.params.id);
    if(!user) return res.status(404).json({status: "error", message: "User not found"});
    res.json(user);
}
async function handleUpdateUserById(req, res) {
    await user.findByIdAndUpdate(req.params.id, {
        lastName: "naik"})
    return res.json({status: "success", message: "User updated successfully"});
}
async function handleDeleteUserById(req, res) {
    await user.findByIdAndDelete(req.params.id);
    return res.json({ status: "success"});
}
async function handleCreateUser(req, res) {
    const body = req.body;
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.jobTitle ||
    !body.gender
  ) {
    return res
      .status(400)
      .json({ status: "error", message: "Please fill all required fields" });
  }

  const result = await user.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });

  return res.status(201).json({ status: "success", id: result._id });
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser,
}

