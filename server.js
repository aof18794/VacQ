const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')


// Route files
const hospitals = require('./routes/hospitals');

// Connect to database
connectDB();

dotenv.config({path:'./config/config.env'});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/v1/hospitals',hospitals);

app.use(express.json());


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,console.log('Server running in',process.env.NODE_ENV,' mode on port',PORT));


process.on('unhandledRejection',(err,promise) => {
    console.log(`Error: ${err.message}`);

    server.close(() => process.exit(1));

})