require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000

app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use("/", require('./routes'));

app.listen(PORT, () => {
    console.log("Server Started : "+ PORT)
});