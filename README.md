## Project: decbase 
Decbase is an adaptive and cross-browser website.

# Installation
To run this project locally, follow the steps below:

Clone the repository from GitHub.
Make sure you have Node.js installed on your machine.
Open a terminal or command prompt in the project directory.
bash
Copy the code
# Install dependencies
npm install

# Start the development server
npm start
# List of technologies used in the project:
HTML5

JavaScript

BEM (Block Element Modifier) methodology

SCSS 

Webpack

# List of APIs used in the project:
Mapbox API (Mapbox API is used to create an interactive map showing the location of the company. The exact location on the map is indicated by a marker, and a popup window appears when you click on the marker).

JSON Placeholder API (for generating users and posts in the "Services" section).
# List of libraries used in the project:
Swiper (The Swiper library is used to implement a carousel of reviews. It allows users to switch between different reviews, 2 reviews per page. Users can navigate through the carousel using arrows. The carousel moves smoothly from one page to another.

# Features

The site includes several features

Loading animation: when the page loads, a 5-second loading animation with five moving elements is displayed.

Smooth Display: In the "News" section, each block is smoothly displayed when scrolling or navigating by title.

Subscription section with validation, animation and saving: The Subscription section implements form validation to ensure input is accurate and correct, and utilizes LocalStorage to store user information. In addition, when the name "Sigma" is entered, a confetti animation is triggered and a modal window appears congratulating the user on receiving a 120% discount.

Modal window on inactivity: If the user does nothing on the site for 1 minute, a modal window opens with a reminder. If the user doesn't respond, the page redirects to Google.

Progress Bar: The progress bar, located under the header, shows the user's position on the page, providing a visual representation of their progression through the site.
