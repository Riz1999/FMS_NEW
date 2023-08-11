var Items_count = [CornPulao=0,CurdRice=1,SambarRice=2,LemonRice=3,MoongDal=4,
  lalChana=5,VegBiryani=6,IdlyWada=7, MysoorBoonda=8, 
  BagaraRice=9,Upma=10,Uthpam=11,PuriPoha=12,Dosa=13,
  AlooParatha=14,SproutsCornFlakes=15,
  ChickenCurry=16,RoganiChicken=17,BeerakayaCurry=18,EggCurry=19,EggBhurji=20,
  MangoPickle=21,GreenChatney=22,Semiyakheer=23,SujiKaHalwa=24,FruitCusturd=25,JibeGaja=26,
  ButterMilk=27,Lemonjuice=28,MangoJuice=29,Rasna=30,Roohafza=31,Milk=32,VegSoup=33,
  MasalaRice=34,VegFriedRice=35,EggFriedRice=36,Rice=37,LemonRice=38,
  PalakDal=39,DalThadka=40,DalFry=41,TomatoDal=42,DalLasoni=43,MethiDal=44,MassorDal=45,
  VegKofta=46,CabbagePorial=47,BeansTomato=48,CrispyVeg=49,TomatoOnionCurry=50,MirchyBhaji=51,
  DalKhichdi=52,KhichdiKatta=53,Gobhi_Manchurian_Wet=54,VegNoodles=55];

var Items_val = ['Corn Pulao','Curd Rice','Sambar Rice','Lemon Rice','Moong Dal',
  'lal Chana','Veg Biryani','Idly/Wada', 'Mysoor Boonda', 
  'Bagara Rice','Upma','Uthpam','Puri/Poha','Dosa',
  'Aloo Paratha','Sprouts/CornFlakes',
  'Chicken Curry','Rogani Chicken','Beerakaya Curry','Egg Curry','Egg Bhurji',
  'Mango Pickle','Green Chatney','Semiyakheer','Suji Ka Halwa','Fruit Custurd','Jibe Gaja',
  'Butter Milk','Lemon juice','Mango Juice','Rasna','Roohafza','Milk','Veg Soup',
  'Masala Rice','Veg Fried Rice','Egg Fried Rice','Rice','Lemon Rice',
  'Palak Dal','Dal Thadka','Dal Fry','Tomato Dal','Dal Lasoni','Methi Dal','Massor Dal',
  'Veg Kofta','Cabbage Porial','Beans Tomato','Crispy Veg','Tomato Onion Curry','Mirchy Bhaji',
  'Dal Khichdi','Khichdi Katta','Gobhi Manchurian Wet','VegNoodles']

///////////////////////////////////////////////////
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
    for(i in Items_count.length, i++){
      if(breakfast == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(lunch.rice_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(lunch.Veg_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(lunch.nonVeg_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(lunch.sides_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(lunch.sweet_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(lunch.drink_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.rice_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.Veg_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.nonVeg_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.sides_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.sweet_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.drink_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
      if(dinner.vegetable_varieties == Items_val[i]){
        Items_count[i] = Items_count[i]+1
      }
    }
    
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
