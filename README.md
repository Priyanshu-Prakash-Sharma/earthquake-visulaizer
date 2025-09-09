🌍 EarthQuake Visualizer

An interactive web application to visualize recent earthquake activity around the world.

📌 Project Overview

This project was built to provide a simple, intuitive way for geography students and enthusiasts to explore real-time seismic patterns. Using data from the USGS, the application plots recent earthquakes on an interactive world map, providing a clear visual representation of global seismic activity.

✨ Features

Real-time Data: Fetches the latest earthquake data from the USGS API.

Interactive Map: Utilizes react-leaflet to display an interactive world map.

Continuous World View: The map seamlessly wraps horizontally, allowing for an endless view of the globe.

Visual Magnitude Indicators: Earthquake markers are colored and sized according to their magnitude, making it easy to identify the most significant events at a glance.

Detailed Popups: Clicking on a marker reveals a popup with detailed information about the earthquake, including magnitude, location, and time.

Responsive Design: The application is designed to be user-friendly on both desktop and mobile devices.

🚀 Live Demo

Check out the live application here:

Live Demo on Vercel

🛠️ Technology Stack

Frontend Framework: React.js (built with Vite)

Styling: Tailwind CSS

Mapping Library: react-leaflet (a React wrapper for the Leaflet.js library)

Data Source: USGS Earthquake API

📦 Installation & Setup

To run this project locally, follow these steps:

Clone the repository:

Bash

git clone https://github.com/your-github-username/earthquake-visualizer.git
cd earthquake-visualizer
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev

The application will be available at http://localhost:5173.

📈 Planned Features

I am planning to add the following features to enhance the application:

[ ] Interactive Sidebar: A sidebar to display a list of all recent earthquakes.

[ ] Search & Filtering: Allow users to search for specific locations or filter earthquakes by magnitude.

[ ] Theming: A dark mode and light mode toggle.

[ ] Legend: A visual legend to explain the marker colors and sizes.

[ ] Sorting: Mechanism to sort the list of earthquakes by magnitude or time.

🤝 Contribution

This project is open-source. Feel free to fork the repository, make changes, and submit a pull request. Any contributions are highly appreciated!
