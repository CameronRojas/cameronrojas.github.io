// server.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const loginRoutes = require('./routerFiles/loginRoute');
const registerRoutes = require('./routerFiles/registerRoute');
const appointmentRoutes = require('./routerFiles/appointmentRoute');
// Use routes
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/register', appointmentRoutes);

//doctor routes
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const doctorActionsRoute = require('./routes/doctorActionsRoute');  // New routes

app.use(express.json());
app.use(express.static('public'));

app.use('/login', loginRoute);
app.use('/doctor', doctorRoute);
app.use('/doctorActions', doctorActionsRoute);  // Use new route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
