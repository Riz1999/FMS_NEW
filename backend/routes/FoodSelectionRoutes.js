var Items_counts = [CornPulao=0,CurdRice=0,SambarRice=0,MoongDal=0,
  lalChana=0,VegBiryani=0,IdlyWada=0, MysoorBoonda=0, 
  BagaraRice=0,Upma=0,Uthpam=0,PuriPoha=0,Dosa=0,
  AlooParatha=0,SproutsCornFlakes=0,
  ChickenCurry=0,RoganiChicken=0,BeerakayaCurry=0,EggCurry=0,EggBhurji=0,
  MangoPickle=0,GreenChatney=0,Semiyakheer=0,SujiKaHalwa=0,FruitCusturd=0,JibeGaja=0,
  ButterMilk=0,Lemonjuice=0,MangoJuice=0,Rasna=0,Roohafza=0,Milk=0,VegSoup=0,
  MasalaRice=0,VegFriedRice=0,EggFriedRice=0,Rice=0,
  PalakDal=0,DalThadka=0,DalFry=0,TomatoDal=0,DalLasoni=0,MethiDal=0,MassorDal=0,
  VegKofta=0,CabbagePorial=0,BeansTomato=0,CrispyVeg=0,TomatoOnionCurry=0,MirchyBhaji=0,
  DalKhichdi=0,KhichdiKatta=0,Gobhi_Manchurian_Wet=0,VegNoodles=0,selectedDay='monday'];// 56

var Items_val_cou = ['CornPulao','CurdRice','SambarRice','LemonRice','MoongDal',
'lalChana','VegBiryani','IdlyWada', 'MysoorBoonda', 
'BagaraRice','Upma','Uthpam','PuriPoha','Dosa',
'AlooParatha','SproutsCornFlakes',
'ChickenCurry','RoganiChicken','BeerakayaCurry','EggCurry','EggBhurji',
'MangoPickle','GreenChatney','Semiyakheer','SujiKaHalwa','FruitCusturd','JibeGaja',
'ButterMilk','Lemonjuice','MangoJuice','Rasna','Roohafza','Milk','VegSoup',
'MasalaRice','VegFriedRice','EggFriedRice','Rice',
'PalakDal','DalThadka','DalFry','Tomato Dal','DalLasoni','MethiDal','MasorDal',
'VegKofta','CabbagePorial','BeansTomato','CrispyVeg','TomatoOnionCurry','MirchyBhaji',
'DalKhichdi','KhichdiKatta','Gobhi_Manchurian_Wet','VegNoodles'];// 56

var Items_val = ['Corn Pulao','Curd Rice','Sambar Rice','Lemon Rice','Moong Dal',
  'lal Chana','Veg Biryani','Idly/Wada ', 'Mysoor Boonda', 
  'Bagara Rice','Upma','Uthpam','Puri/Poha','Dosa',
  'Aloo Paratha','Sprouts/CornFlakes',
  'Chicken Curry','Rogani Chicken','Beerakaya Curry','Egg Curry','Egg Bhurji',
  'Mango Pickle','Green Chatney','Semiya kheer','Suji Ka Halwa','Fruit Custurd','Jibe Gaja',
  'Butter Milk','Lemon juice','Mango Juice','Rasna','Roohafza','Milk','Veg Soup',
  'Masala Rice','Veg Fried Rice','Egg Fried Rice','Rice',
  'Palak Dal','Dal Thadka','Dal Fry','Tomato Dal','Dal Lasoni','Methi Dal','Massor Dal',
  'Veg Kofta','Cabbage Porial','Beans Tomato','Crispy Veg','Tomato Onion Curry','Mirchy Bhaji',
  'Dal Khichdi','Khichdi Katta','Gobhi Manchurian Wet','Veg Noodles']

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

    var l = 0
    
    var famus_Items = []

    if(selectedDay == Items_counts[55]){
      const nw =0
    } else {
      Items_counts[55] = selectedDay
    };
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb+srv://woxsenai:Ai%40l%40b2020@cluster0.yehbpjg.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    let db; // Declare a variable to hold the database instance

    async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db('test'); // Replace with your database name
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database', err);
    }
    }

    async function readAndValidateArray() {
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});

        if(selectedDay == "monday"){
          if (result && result.Monday) {
            const arrayFromDb = result.Monday;

            const modifiedArray = result.Monday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };

            await collection.updateOne(
              {},
              { $set: { Monday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Monday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

          } else {
            console.log('Array not found in the database');
          }
        };
      } catch (err) {
        console.error('Error reading and validating array', err);
      }
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});
        if(selectedDay == "tuesday"){
          if (result && result.Tuesday) {
            const arrayFromDb = result.Tuesday;

            const modifiedArray = result.Tuesday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };
            
            
            await collection.updateOne(
              {},
              { $set: { Tuesday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Tuesday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

              // Perform validations on array properties

          } else {
            console.log('Array not found in the database');
          }
        };
      } catch (err) {
        console.error('Error reading and validating array', err);
      }
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});
        result = await collection.findOne({});
        if(selectedDay == "wednesday"){
          if (result && result.Wednesday) {
            const arrayFromDb = result.Wednesday;

            const modifiedArray = result.Wednesday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };
            
            
            await collection.updateOne(
              {},
              { $set: { Wednesday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Wednesday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

              // Perform validations on array properties
          } else {
            console.log('Array not found in the database');
          }
        };
      } catch (err) {
        console.error('Error reading and validating array', err);
      }
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});
        result = await collection.findOne({});
        if(selectedDay == "thursday"){
          if (result && result.Thursday) {
            const arrayFromDb = result.Thursday;

            const modifiedArray = result.Thursday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };
            
            
            await collection.updateOne(
              {},
              { $set: { Thursday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Thursday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

          } else {
            console.log('Array not found in the database');
          }
        };
      } catch (err) {
        console.error('Error reading and validating array', err);
      }
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});
        
        if(selectedDay == "friday"){
          if (result && result.Friday) {
            const arrayFromDb = result.Friday;

            const modifiedArray = result.Friday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };
            
            
            await collection.updateOne(
              {},
              { $set: { Friday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Friday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

              // Perform validations on array properties
          } else {
            console.log('Array not found in the database');
          }
        };
      } catch (err) {
        console.error('Error reading and validating array', err);
      }
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});
        if(selectedDay == "saturday"){
          if (result && result.Saturday) {
            const arrayFromDb = result.Saturday;

            const modifiedArray = result.Saturday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };
            

            await collection.updateOne(
              {},
              { $set: { Saturday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Saturday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

          } else {
            console.log('Array not found in the database');
          }
        };
      } catch (err) {
        console.error('Error reading and validating array', err);
      }
      try {
        const collection = db.collection('famus_items');
        let result = await collection.findOne({});
        result = await collection.findOne({});
        if(selectedDay == "sunday"){
          if (result && result.Sunday) {
            const arrayFromDb = result.Sunday;

            const modifiedArray = result.Sunday
            let i = 0
            while(i < Items_val_cou.length){
              if(breakfast == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(lunch.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.rice_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.Veg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.nonVeg_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.sides_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i]) 
              }
              if(dinner.sweet_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.drink_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.vegetable_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.khichdi_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              }
              if(dinner.chinese_varieties == Items_val[i]){
                modifiedArray[Items_val_cou[i]] = modifiedArray[Items_val_cou[i]]+1
                console.log("database Modified for :- ",Items_val_cou[i])
              };
              i++;
            };
            
            
            await collection.updateOne(
              {},
              { $set: { Sunday: modifiedArray } }
            );

            while(l < Items_counts.length){
              const Item = result.Sunday[Items_val_cou[l]];
              if(Item > 4){
                famus_Items.push(Items_val[l])
              };
              l++;
            };
            famus_Items.push(selectedDay)
            console.log(famus_Items)

          } else {
            console.log('Array not found in the database');
          }
        }
      } catch (err) {
          console.error('Error reading and validating array', err);
      }
    }
    connectToDatabase()
      .then(() => {
      readAndValidateArray();
      })
      .catch(error => {
        console.error('Error connecting to database', error);
      });;
    
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
