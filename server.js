const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');
const routes = require("../backend/router/index");

//load env file
dotenv.config();

app.use(express.json());
app.use(cors());

// routes
app.use('/api', routes);


//start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend is active on port ${PORT}`);
    
})


