const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", require('./routes/index.js'));

app.listen(PORT, () => {
    console.log("Server Started : "+ PORT)
});