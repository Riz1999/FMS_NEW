const { MongoClient } = require('mongodb');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// MongoDB connection URI
const uri = 'mongodb+srv://sonalisadana1:sonalisadana@cluster0.ea2yqup.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
const dbName = 'yourDatabaseName'; // Replace with your database name

async function getDataAndCreateCSV() {
  try {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const db = client.db(dbName);

    const csvFilePath = 'orders_with_customers.csv';

    // Define the CSV header
    const csvHeader = [
      { id: 'orderId', title: 'Order ID' },
      { id: 'selectedday', title: 'SelectedDay' },
      { id: 'selectedmeal',titli: 'SelectedMeal'},
      { id: 'selectedoption',titli: 'SelectedOption'},
      { id: 'customerName', title: 'Customer Name' },
      { id: 'customerEmail', title: 'Customer Email' },
    ];

    // Create a CSV writer
    const csvWriter = createCsvWriter({
      path: csvFilePath,
      header: csvHeader,
    });

    // Fetch orders and populate customer information
    const orders = await db.collection('orders').find({}).toArray();

    // Initialize an array to store the records for CSV
    const csvData = [];

    for (const order of orders) {
      const customer = await db.collection('customers').findOne({ _id: order.customerId });

      // Create a record object with the desired data for CSV
      const record = {
        orderId: order._id,
        orderDate: order.orderDate,
        customerName: customer.name,
        customerEmail: customer.email,
      };

      // Add the record to the CSV data array
      csvData.push(record);
    }

    // Write the data to the CSV file
    csvWriter
      .writeRecords(csvData)
      .then(() => console.log('CSV file created successfully!'))
      .catch((err) => console.error('Error creating CSV file:', err));

    client.close();
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

getDataAndCreateCSV();
