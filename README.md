# AI Joke Generator

A simple and fun web application that uses Google's Gemini AI model to generate jokes on demand. Whether you're looking for a dad joke, some programming humor, or just a good laugh, this tool has you covered.

## Features

- **Multiple Categories**: Choose from various joke categories including:
  - General
  - Dad Jokes
  - Programming
  - Animal
- **AI-Powered**: Utilizes the `gemini-2.5-flash` model via the Google Generative AI API to create unique and relevant jokes.
- **Simple Interface**: Clean and easy-to-use design.
- **Instant Results**: Get a joke with a single click.

## Technologies Used

- **HTML5**: For the structure of the application.
- **CSS3**: For styling and layout.
- **JavaScript (ES6+)**: For logic and API interaction.
- **Google Gemini API**: To generate the joke content.

## Setup and Installation

1.  **Clone the repository** (or download the source files):
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd Joke Generator
    ```
3.  **Open the application**:
    Simply open the `index.html` file in your preferred web browser.

## API Key Configuration

The project comes with a configured API key in `script.js`. However, for best performance and to avoid rate limits, it is recommended to use your own API key.

1.  Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2.  Open `script.js` in a text editor.
3.  Replace the value of the `API_KEY` variable with your new key:
    ```javascript
    const API_KEY = "YOUR_NEW_API_KEY_HERE";
    ```

## Usage

1.  Select a category from the dropdown menu (e.g., "Dad Jokes").
2.  Click the **"Tell me a joke!"** button.
3.  Wait a moment for the AI to cook up a joke.
4.  Enjoy the humor!

## Contributing

Feel free to fork this project and submit pull requests. You can add more categories, improve the styling, or switch to a different AI model.

## License

This project is open source and available for personal and educational use.
