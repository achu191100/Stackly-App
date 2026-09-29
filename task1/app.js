const express = require("express");           //imports express

const app = express();        //create express application


app.get("/", (req, res) => {            // Create GET API for home page
    res.send("Welcome to Stackly!!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on localhost...");
});