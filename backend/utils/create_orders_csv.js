// const fs = require('fs');
// const MongoClient = require('mongodb').MongoClient;
// const ExcelJS = require('exceljs');

// // MongoDB connection URL
// const mongoUrl = 'mongodb+srv://sonalisadana1:sonalisadana@cluster0.ea2yqup.mongodb.net/?retryWrites=true&w=majority';
// const dbName = 'test';

// // Create a new workbook and worksheet
// const workbook = new ExcelJS.Workbook();
// const worksheet = workbook.addWorksheet('UserFoodData');

// // Connect to MongoDB and fetch data from collections
// (async () => {
//   const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);

//     // Fetch data from collections
//     const users = await db.collection('users').find().toArray();
//     const foodSelected = await db.collection('userfoodselections').find().toArray();


//     // Combine user and food data
//     const combinedData = users.map(user => {
//       const selectedFood = foodSelected.find(userfoodselection => userfoodselection.userId === user._id);
//       const breakfast = foodSelected
//         .map(userfoodselection => userfoodselection.breakfast)
//       const lunch = foodSelected.map(userfoodselection => userfoodselection.lunch)
//       const dinner = foodSelected.map(userfoodselection => userfoodselection.dinner)

//       if (breakfast === 'Idly/Wada') {
//         breakfast_item.IdlyWada = +1
//       };

//       return {
//         username: user.name,
//         userEmail: user.email,
//         breakfast: selectedFood ? selectedFood.breakfast : breakfast,
//         lunch: selectedFood ? selectedFood.lunch : lunch,
//         dinner: selectedFood ? selectedFood.dinner : dinner
//       };
//     });

//     // Add headers to the worksheet
//     worksheet.addRow(['Username', "UserEmail" ,'Breakfast', 'lunch', 'dinner']);

//     // Add data to the worksheet
//     combinedData.forEach(data => {
//       worksheet.addRow([data.username, data.userEmail, data.breakfast, data.lunch, data.dinner]);
//     });

//     // Save the workbook as a CSV file
//     const csvFilePath = 'user_food_data.csv';
//     await workbook.xlsx.writeFile(csvFilePath);
//     console.log(`CSV file "${csvFilePath}" generated successfully.`);
//   } catch (err) {
//     console.error('Error:', err);
//   } finally {
//     // Close the MongoDB connection
//     client.close();
//   }
// })();
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

    async function saveArray() {
      try {
        const collection = db.collection('famus_items'); 
        await collection.insertOne({ Monday: {
          CornPulao: 0,
          CurdRice: 0,
          SambarRice: 0,
          LemonRice: 0,
          MoongDal: 0,
          lalChana: 0,
          VegBiryani: 0,
          IdlyWada: 0, 
          MysoorBoonda: 0, 
          BagaraRice: 0,
          Upma: 0,
          Uthpam: 0,
          PuriPoha: 0,
          Dosa: 0,
          AlooParatha: 0,
          SproutsCornFlakes: 0,
          ChickenCurry: 0,
          RoganiChicken: 0,
          BeerakayaCurry: 0,
          EggCurry: 0,
          EggBhurji: 0,
          MangoPickle: 0,
          GreenChatney: 0,
          Semiyakheer: 0,
          SujiKaHalwa: 0,
          FruitCusturd: 0,
          JibeGaja: 0,
          ButterMilk: 0,
          Lemonjuice: 0,
          MangoJuice: 0,
          Rasna: 0,
          Roohafza: 0,
          Milk: 0,
          VegSoup: 0,
          MasalaRice: 0,
          VegFriedRice: 0,
          EggFriedRice: 0,
          Rice: 0,
          PalakDal: 0,
          DalThadka: 0,
          DalFry: 0,
          TomatoDal: 0,
          DalLasoni: 0,
          MethiDal: 0,
          MassorDal: 0,
          VegKofta: 0,
          CabbagePorial: 0,
          BeansTomato: 0,
          CrispyVeg: 0,
          TomatoOnionCurry: 0,
          MirchyBhaji: 0,
          DalKhichdi: 0,
          KhichdiKatta: 0,
          Gobhi_Manchurian_Wet: 0,
          VegNoodles: 0},Tuesday: {
            CornPulao: 0,
            CurdRice: 0,
            SambarRice: 0,
            LemonRice: 0,
            MoongDal: 0,
            lalChana: 0,
            VegBiryani: 0,
            IdlyWada: 0, 
            MysoorBoonda: 0, 
            BagaraRice: 0,
            Upma: 0,
            Uthpam: 0,
            PuriPoha: 0,
            Dosa: 0,
            AlooParatha: 0,
            SproutsCornFlakes: 0,
            ChickenCurry: 0,
            RoganiChicken: 0,
            BeerakayaCurry: 0,
            EggCurry: 0,
            EggBhurji: 0,
            MangoPickle: 0,
            GreenChatney: 0,
            Semiyakheer: 0,
            SujiKaHalwa: 0,
            FruitCusturd: 0,
            JibeGaja: 0,
            ButterMilk: 0,
            Lemonjuice: 0,
            MangoJuice: 0,
            Rasna: 0,
            Roohafza: 0,
            Milk: 0,
            VegSoup: 0,
            MasalaRice: 0,
            VegFriedRice: 0,
            EggFriedRice: 0,
            Rice: 0,
            PalakDal: 0,
            DalThadka: 0,
            DalFry: 0,
            TomatoDal: 0,
            DalLasoni: 0,
            MethiDal: 0,
            MassorDal: 0,
            VegKofta: 0,
            CabbagePorial: 0,
            BeansTomato: 0,
            CrispyVeg: 0,
            TomatoOnionCurry: 0,
            MirchyBhaji: 0,
            DalKhichdi: 0,
            KhichdiKatta: 0,
            Gobhi_Manchurian_Wet: 0,
            VegNoodles: 0},Wednesday: {
              CornPulao: 0,
              CurdRice: 0,
              SambarRice: 0,
              LemonRice: 0,
              MoongDal: 0,
              lalChana: 0,
              VegBiryani: 0,
              IdlyWada: 0, 
              MysoorBoonda: 0, 
              BagaraRice: 0,
              Upma: 0,
              Uthpam: 0,
              PuriPoha: 0,
              Dosa: 0,
              AlooParatha: 0,
              SproutsCornFlakes: 0,
              ChickenCurry: 0,
              RoganiChicken: 0,
              BeerakayaCurry: 0,
              EggCurry: 0,
              EggBhurji: 0,
              MangoPickle: 0,
              GreenChatney: 0,
              Semiyakheer: 0,
              SujiKaHalwa: 0,
              FruitCusturd: 0,
              JibeGaja: 0,
              ButterMilk: 0,
              Lemonjuice: 0,
              MangoJuice: 0,
              Rasna: 0,
              Roohafza: 0,
              Milk: 0,
              VegSoup: 0,
              MasalaRice: 0,
              VegFriedRice: 0,
              EggFriedRice: 0,
              Rice: 0,
              PalakDal: 0,
              DalThadka: 0,
              DalFry: 0,
              TomatoDal: 0,
              DalLasoni: 0,
              MethiDal: 0,
              MassorDal: 0,
              VegKofta: 0,
              CabbagePorial: 0,
              BeansTomato: 0,
              CrispyVeg: 0,
              TomatoOnionCurry: 0,
              MirchyBhaji: 0,
              DalKhichdi: 0,
              KhichdiKatta: 0,
              Gobhi_Manchurian_Wet: 0,
              VegNoodles: 0},Thursday: {
                CornPulao: 0,
                CurdRice: 0,
                SambarRice: 0,
                LemonRice: 0,
                MoongDal: 0,
                lalChana: 0,
                VegBiryani: 0,
                IdlyWada: 0, 
                MysoorBoonda: 0, 
                BagaraRice: 0,
                Upma: 0,
                Uthpam: 0,
                PuriPoha: 0,
                Dosa: 0,
                AlooParatha: 0,
                SproutsCornFlakes: 0,
                ChickenCurry: 0,
                RoganiChicken: 0,
                BeerakayaCurry: 0,
                EggCurry: 0,
                EggBhurji: 0,
                MangoPickle: 0,
                GreenChatney: 0,
                Semiyakheer: 0,
                SujiKaHalwa: 0,
                FruitCusturd: 0,
                JibeGaja: 0,
                ButterMilk: 0,
                Lemonjuice: 0,
                MangoJuice: 0,
                Rasna: 0,
                Roohafza: 0,
                Milk: 0,
                VegSoup: 0,
                MasalaRice: 0,
                VegFriedRice: 0,
                EggFriedRice: 0,
                Rice: 0,
                PalakDal: 0,
                DalThadka: 0,
                DalFry: 0,
                TomatoDal: 0,
                DalLasoni: 0,
                MethiDal: 0,
                MassorDal: 0,
                VegKofta: 0,
                CabbagePorial: 0,
                BeansTomato: 0,
                CrispyVeg: 0,
                TomatoOnionCurry: 0,
                MirchyBhaji: 0,
                DalKhichdi: 0,
                KhichdiKatta: 0,
                Gobhi_Manchurian_Wet: 0,
                VegNoodles: 0},Friday: {
                  CornPulao: 0,
                  CurdRice: 0,
                  SambarRice: 0,
                  LemonRice: 0,
                  MoongDal: 0,
                  lalChana: 0,
                  VegBiryani: 0,
                  IdlyWada: 0, 
                  MysoorBoonda: 0, 
                  BagaraRice: 0,
                  Upma: 0,
                  Uthpam: 0,
                  PuriPoha: 0,
                  Dosa: 0,
                  AlooParatha: 0,
                  SproutsCornFlakes: 0,
                  ChickenCurry: 0,
                  RoganiChicken: 0,
                  BeerakayaCurry: 0,
                  EggCurry: 0,
                  EggBhurji: 0,
                  MangoPickle: 0,
                  GreenChatney: 0,
                  Semiyakheer: 0,
                  SujiKaHalwa: 0,
                  FruitCusturd: 0,
                  JibeGaja: 0,
                  ButterMilk: 0,
                  Lemonjuice: 0,
                  MangoJuice: 0,
                  Rasna: 0,
                  Roohafza: 0,
                  Milk: 0,
                  VegSoup: 0,
                  MasalaRice: 0,
                  VegFriedRice: 0,
                  EggFriedRice: 0,
                  Rice: 0,
                  PalakDal: 0,
                  DalThadka: 0,
                  DalFry: 0,
                  TomatoDal: 0,
                  DalLasoni: 0,
                  MethiDal: 0,
                  MassorDal: 0,
                  VegKofta: 0,
                  CabbagePorial: 0,
                  BeansTomato: 0,
                  CrispyVeg: 0,
                  TomatoOnionCurry: 0,
                  MirchyBhaji: 0,
                  DalKhichdi: 0,
                  KhichdiKatta: 0,
                  Gobhi_Manchurian_Wet: 0,
                  VegNoodles: 0},Saturday: {
                    CornPulao: 0,
                    CurdRice: 0,
                    SambarRice: 0,
                    LemonRice: 0,
                    MoongDal: 0,
                    lalChana: 0,
                    VegBiryani: 0,
                    IdlyWada: 0, 
                    MysoorBoonda: 0, 
                    BagaraRice: 0,
                    Upma: 0,
                    Uthpam: 0,
                    PuriPoha: 0,
                    Dosa: 0,
                    AlooParatha: 0,
                    SproutsCornFlakes: 0,
                    ChickenCurry: 0,
                    RoganiChicken: 0,
                    BeerakayaCurry: 0,
                    EggCurry: 0,
                    EggBhurji: 0,
                    MangoPickle: 0,
                    GreenChatney: 0,
                    Semiyakheer: 0,
                    SujiKaHalwa: 0,
                    FruitCusturd: 0,
                    JibeGaja: 0,
                    ButterMilk: 0,
                    Lemonjuice: 0,
                    MangoJuice: 0,
                    Rasna: 0,
                    Roohafza: 0,
                    Milk: 0,
                    VegSoup: 0,
                    MasalaRice: 0,
                    VegFriedRice: 0,
                    EggFriedRice: 0,
                    Rice: 0,
                    PalakDal: 0,
                    DalThadka: 0,
                    DalFry: 0,
                    TomatoDal: 0,
                    DalLasoni: 0,
                    MethiDal: 0,
                    MassorDal: 0,
                    VegKofta: 0,
                    CabbagePorial: 0,
                    BeansTomato: 0,
                    CrispyVeg: 0,
                    TomatoOnionCurry: 0,
                    MirchyBhaji: 0,
                    DalKhichdi: 0,
                    KhichdiKatta: 0,
                    Gobhi_Manchurian_Wet: 0,
                    VegNoodles: 0},Sunday: {
                      CornPulao: 0,
                      CurdRice: 0,
                      SambarRice: 0,
                      LemonRice: 0,
                      MoongDal: 0,
                      lalChana: 0,
                      VegBiryani: 0,
                      IdlyWada: 0, 
                      MysoorBoonda: 0, 
                      BagaraRice: 0,
                      Upma: 0,
                      Uthpam: 0,
                      PuriPoha: 0,
                      Dosa: 0,
                      AlooParatha: 0,
                      SproutsCornFlakes: 0,
                      ChickenCurry: 0,
                      RoganiChicken: 0,
                      BeerakayaCurry: 0,
                      EggCurry: 0,
                      EggBhurji: 0,
                      MangoPickle: 0,
                      GreenChatney: 0,
                      Semiyakheer: 0,
                      SujiKaHalwa: 0,
                      FruitCusturd: 0,
                      JibeGaja: 0,
                      ButterMilk: 0,
                      Lemonjuice: 0,
                      MangoJuice: 0,
                      Rasna: 0,
                      Roohafza: 0,
                      Milk: 0,
                      VegSoup: 0,
                      MasalaRice: 0,
                      VegFriedRice: 0,
                      EggFriedRice: 0,
                      Rice: 0,
                      PalakDal: 0,
                      DalThadka: 0,
                      DalFry: 0,
                      TomatoDal: 0,
                      DalLasoni: 0,
                      MethiDal: 0,
                      MassorDal: 0,
                      VegKofta: 0,
                      CabbagePorial: 0,
                      BeansTomato: 0,
                      CrispyVeg: 0,
                      TomatoOnionCurry: 0,
                      MirchyBhaji: 0,
                      DalKhichdi: 0,
                      KhichdiKatta: 0,
                      Gobhi_Manchurian_Wet: 0,
                      VegNoodles: 0} });
        console.log('Array saved to database');
      } catch (err) {
        console.error('Error saving array', err);
      }
    }

    connectToDatabase()
      .then(() => {
      saveArray()
      })
      .catch(error => {
        console.error('Error connecting to database', error);
      });;