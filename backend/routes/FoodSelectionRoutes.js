const express = require("express");
const router = express.Router();
const UserFoodSelection = require("../models/FoodSelection");

// POST route to handle food selections
router.post("/", async (req, res) => {
  const { userId, selectedDay, breakfast, lunch, dinner } = req.body;

  try {
    // Create a new instance of the UserFoodSelection model with the user's food selection data
    const foodSelection = new UserFoodSelection({
     userId,
      selectedDay,
      breakfast,
      lunch,
      dinner,
    });

    // Save the food selection to the database
    await foodSelection.save();

    res.status(201).json({ message: "Food selection saved successfully" });
  } catch (error) {
    console.error("Error saving food selection:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/userSelectedDays/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    console.log("Received userId:", userId);

    // Query the database to find all user selections with the matching userId
    const userSelections =  await UserFoodSelection.find({  userId });
    console.log("User selections:", userSelections);

    // Extract selected days from user selections
    const selectedDays = userSelections.map(selection => selection.selectedDay);

    console.log("Selected days:", selectedDays);

    res.status(200).json({ selectedDays });
  } catch (error) {
    console.error("Error fetching selected days:", error);
    res.status(500).json({ message: "Server error" });
  }

 
})


module.exports = router;
