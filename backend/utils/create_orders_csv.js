//Breakfast
const breakfast_item = { IdlyWada:0, MysoorBoonda:0, BagaraRice:0,Upma:0,Uthpam:0,PuriPoha:0,Dosa:0,AlooParatha:0,SproutsCornFlakes:0 };

// Rice Lunch Varieties
var CornPulao,CurdRice,SambarRice,LemonRice;

//Veg Lunch Varieties
var MoongDal,lalChana,VegBiryani

//NonVeg Lunch Varieties for dinner also
var ChickenCurry,RoganiChicken,BeerakayaCurry,EggCurry,EggBhurji;

//Sides in Lunch , Sides in Dinner
var MangoPickle,GreenChatney;

//Sweet Lunch Varieties
var Semiyakheer,SujiKaHalwa,FruitCusturd,JibeGaja;

//Drink Lunch Varieties and also for dinner
var ButterMilk,Lemonjuice,MangoJuice,Rasna,Roohafza,Milk,VegSoup;

// Dinner Plain Rice, Chapathi, Curd
// Rice Dinner Varieties
var MasalaRice,VegFriedRice,EggFriedRice,Rice,LemonRice;


//Dal in dinner
var PalakDal,DalThadka,DalFry,TomatoDal,DalLasoni,MethiDal,MassorDal;

// Vegetable Varieties in dinner
var VegKofta,CabbagePorial,BeansTomato,CrispyVeg,TomatoOnionCurry,MirchyBhaji;

//Khichdi Varieties
var DalKhichdi,KhichdiKatta;

//Chinese Varieties
var GobhiManchurianWet,VegNoodles;

const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const ExcelJS = require('exceljs');

// MongoDB connection URL
const mongoUrl = 'mongodb+srv://sonalisadana1:sonalisadana@cluster0.ea2yqup.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'test';

// Create a new workbook and worksheet
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('UserFoodData');

// Connect to MongoDB and fetch data from collections
(async () => {
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Fetch data from collections
    const users = await db.collection('users').find().toArray();
    const foodSelected = await db.collection('userfoodselections').find().toArray();


    // Combine user and food data
    const combinedData = users.map(user => {
      const selectedFood = foodSelected.find(userfoodselection => userfoodselection.userId === user._id);
      const breakfast = foodSelected
        .map(userfoodselection => userfoodselection.breakfast)
      const lunch = foodSelected.map(userfoodselection => userfoodselection.lunch)
      const dinner = foodSelected.map(userfoodselection => userfoodselection.dinner)

      if (breakfast === 'Idly/Wada') {
        breakfast_item.IdlyWada = +1
      };

      return {
        username: user.name,
        userEmail: user.email,
        breakfast: selectedFood ? selectedFood.breakfast : breakfast,
        lunch: selectedFood ? selectedFood.lunch : lunch,
        dinner: selectedFood ? selectedFood.dinner : dinner
      };
    });

    // Add headers to the worksheet
    worksheet.addRow(['Username', "UserEmail" ,'Breakfast', 'lunch', 'dinner']);

    // Add data to the worksheet
    combinedData.forEach(data => {
      worksheet.addRow([data.username, data.userEmail, data.breakfast, data.lunch, data.dinner]);
    });

    // Save the workbook as a CSV file
    const csvFilePath = 'user_food_data.csv';
    await workbook.xlsx.writeFile(csvFilePath);
    console.log(`CSV file "${csvFilePath}" generated successfully.`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the MongoDB connection
    client.close();
  }
})();
// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb+srv://sonalisadana1:sonalisadana@cluster0.ea2yqup.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function getDataFromMongo() {
//     try {
//         await client.connect();
//         const database = client.db('test'); // Replace with your database name
//         const usersCollection = database.collection('users');
//         const foodCollection = database.collection('userfoodselections');

//         const users = await usersCollection.find().toArray();
//         const foodSelections = await foodCollection.find().toArray();

//         return { users, foodSelections };
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     } finally {
//         await client.close();
//     }
// }

// const fs = require('fs');
// const ExcelJS = require('exceljs');

// function generateCSV(users, foodSelections) {
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Sheet1');
    
//     // Add header row
//     worksheet.addRow(['User ID', 'Username', 'UserEmail', 'breakfast', 'lunch', 'dinner']);
    
//     // Add data rows
//     users.forEach(user => {
//         const breakfast = foodSelections
//             //.filter(userfoodselection => userfoodselection.userId === user._id)
//             .map(userfoodselection => userfoodselection.breakfast)
//             .join(', ');
//         const lunch = foodSelections
//             //.filter(userfoodselection => userfoodselection.userId === user._id)
//             .map(userfoodselection => userfoodselection.lunch)
//             .join(', ');
//         const dinner = foodSelections
//             //.filter(userfoodselection => userfoodselection.userId === user._id)
//             .map(userfoodselection => userfoodselection.dinner)
//             .join(', ');
        
//         worksheet.addRow([user._id, user.name, user.email, breakfast, lunch, dinner]);
//     });
    
//     // Save the workbook to a file
//     const csvFilePath = 'user_food_selections.csv';
//     workbook.xlsx.writeFile(csvFilePath)
//         .then(() => {
//             console.log(`CSV file saved at: ${csvFilePath}`);
//         })
//         .catch(err => {
//             console.error('Error saving CSV file:', err);
//         });
// }

// getDataFromMongo().then(({ users, foodSelections }) => {
//     generateCSV(users, foodSelections);
// });
