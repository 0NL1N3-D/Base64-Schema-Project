const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
const port = 3000;
const dbName = "Base64_Schema";
const url = `mongodb://localhost:27017/${dbName}`;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });

// Use the image routes
app.use("/", imageRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
