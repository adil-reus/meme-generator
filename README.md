# Meme Generator

A simple and interactive meme generator built with React. This application allows users to select a meme template, add custom text, drag and position the text on the meme, and download the final meme as an image.

## Features

- Fetches meme templates from the [Imgflip API](https://api.imgflip.com/get_memes).
- Allows users to add multiple text fields to the meme.
- Drag and position text anywhere on the meme.
- Download the customized meme as an image.
- Responsive design for a seamless experience on all devices.

## Demo

Check out the live demo: [Meme Generator](https://meme-generator-neon-gamma.vercel.app)

## Technologies Used

- **React**: For building the user interface.
- **react-draggable**: For enabling draggable text elements.
- **html2canvas**: For capturing the meme container and generating the downloadable image.
- **CSS Grid & Flexbox**: For responsive and modern layout design.

## How to Use

1. **Select a Meme Template**:
   - Browse the available meme templates on the homepage.
   - Click the "Edit" button on the meme you want to customize.

2. **Customize the Meme**:
   - Add text by typing in the input fields.
   - Drag and position the text anywhere on the meme.

3. **Download the Meme**:
   - Once satisfied with your customization, click the "Download Meme" button to save the meme as an image.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/adil-reus/meme-generator.git
   cd meme-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
meme-generator/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # React components
│   ├── App.js          # Main application file
│   ├── MemeEditor.js   # Meme editor component
│   ├── index.css       # Global styles
│   └── index.js        # Entry point
└── README.md           # Project documentation
```

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.