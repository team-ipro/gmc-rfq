const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/rfqData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a schema and model for the form data

const employeeSchema = new mongoose.Schema({
  name: String,
  designation: String,
  age: String,
  dob: String,
  salary: String,
});

const formSchema = new mongoose.Schema({
  insuredName: String,
  address: String,
  business: String,
  existingInsurerAndPolicyNumber: String,
  coverageRequired: String,
  sumInsuredPerEmployee: String,
  totalNumberOfEmployees: String,
  totalSumInsured: String,
  employee: [employeeSchema],
  // Add other fields here
});

const FormData = mongoose.model('FormData', formSchema);

// API endpoint to handle form submissions
app.post('/api/data', async (req, res) => {
  const formData = new FormData(req.body);
  try {
    await formData.save();
    res.status(201).send(formData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
