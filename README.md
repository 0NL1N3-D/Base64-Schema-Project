Here’s a polished and detailed README description for your GitHub repository:

markdown

# Image to Base64 Converter

This project is a web application that allows users to convert images into Base64 format and upload them to a server. With a clean and modern interface, users can select an image file, provide a custom name (without the file extension), and view the generated Base64 string. The application also communicates with a Node.js backend, which stores the uploaded images in a MongoDB database.

## Features

- **Image Upload**: Easily select images from your device to convert.
- **Base64 Conversion**: Automatically converts the selected image into a Base64 string, enabling quick integration into web applications.
- **Custom Image Naming**: Enter a custom name for the image, with the application automatically appending the appropriate file extension based on the selected image type (e.g., `.png`, `.jpg`).
- **Server Integration**: The application uses the Fetch API to send image data to the Node.js backend for storage, ensuring seamless server communication.
- **Responsive Design**: The application is designed to be visually appealing and functional across various devices, providing a great user experience.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Libraries**: Mongoose, Body-Parser, CORS

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed