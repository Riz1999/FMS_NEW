// models/UserFoodSelection.js
const mongoose = require("mongoose");

const userFoodSelectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  selectedDay: {
    type: String,
    required: true,
  },
  selectedMeal: {
    type: String,
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
});

const UserFoodSelection = mongoose.model(
  "UserFoodSelection",
  userFoodSelectionSchema
);

module.exports = UserFoodSelection;
