const fs = require("fs").promises;
const Image = require("../models/Image");

exports.getImages = async (req, res) => {
    try {
        console.log("Fetching documents from MongoDB...");
        const docs = await Image.find({});
        console.log("Retrieved documents from MongoDB:", docs);
        res.send(docs);
    } catch (err) {
        console.error("Error fetching documents from MongoDB:", err);
        res.status(500).send(err);
    }
};

exports.uploadImage = async (req, res) => {
    try {
        console.log("Received POST request");

        const { base64, imageName, imageType } = req.body;
        console.log('Received data from client:', { base64: !!base64, imageName, imageType });

        // Extract base64 data if it contains metadata
        const base64Data = base64.includes(",") ? base64.split(",")[1] : base64;
        console.log("Extracted base64 data");

        // Convert base64 to buffer
        const buffer = Buffer.from(base64Data, "base64");
        console.log("Converted base64 to buffer");

        // Check if uploads folder exists, create if not
        const uploadFolderPath = 'uploads';
        try {
            await fs.access(uploadFolderPath);
            console.log("Uploads folder exists");
        } catch (err) {
            await fs.mkdir(uploadFolderPath);
            console.log("Created uploads folder");
        }

        // Modify imageName to include file extension from imageType
        const fileExtension = imageType.split('/')[1];
        const imageNameWithExt = `${imageName}.${fileExtension}`;
        console.log("Modified imageName with extension:", imageNameWithExt);

        // Save the file with the given extension
        const filePath = `${uploadFolderPath}/${imageNameWithExt}`;
        await fs.writeFile(filePath, buffer);
        console.log(`File ${filePath} saved successfully`);

        // Insert metadata into MongoDB with image name including extension
        const imageDoc = new Image({ imageName: imageNameWithExt, filePath, imageType });
        const result = await imageDoc.save();
        console.log("Document inserted into MongoDB:", result._id);
        res.json({ message: "File saved successfully", id: result._id });
    } catch (err) {
        console.error("Error processing POST request:", err);
        res.status(500).send({ error: err.message });
    }
};
