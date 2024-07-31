Image to Base64 Converter

This project is a web application that enables users to convert images to Base64 format and upload them to a server. The application features an intuitive interface, allowing users to select an image file, provide a custom name (without an extension), and view the generated Base64 string.
Features

    Image Upload: Users can choose images from their device for conversion.
    Base64 Conversion: The application converts the selected image to a Base64 string, making it easy to use in web applications.
    Custom Naming: Users can enter a custom name for the image, which the application automatically appends with the correct file extension based on the image type (e.g., .png, .jpg).
    Server Communication: The app utilizes the Fetch API to send image data to a Node.js backend for storage in a MongoDB database.
    Responsive Design: The application is designed to be visually appealing and functional on various devices.

Project Structure

    index.html: Main HTML file containing the structure of the application.
    styles.css: CSS file for styling, providing a modern look and feel.
    server.js: Entry point for the backend server, managing image uploads and database interactions.
    controllers/imageController.js: Contains logic for processing image-related requests.
    models/Image.js: Defines the Mongoose schema for image metadata in MongoDB.
    routes/imageRoutes.js: Defines API routes for image handling.

Technologies Used

    Frontend: HTML, CSS, JavaScript
    Backend: Node.js, Express.js
    Database: MongoDB
    Libraries: Mongoose, Body-Parser, CORS

Getting Started

    Clone the repository.
    Install dependencies with npm install.
    Start the MongoDB server.
    Run the backend server with node server.js.
    Open index.html in a web browser to access the application.

This project is licensed under the MIT License.

Feel free to adjust any details to better fit your needs!