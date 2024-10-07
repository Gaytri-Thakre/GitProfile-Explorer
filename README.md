# GitProfile Explorer

A simple web-based application that allows users to search for GitHub profiles and view detailed information such as repositories, followers, following, bio, and more. The app also features a dark mode toggle for better user experience.

## Features

- **Search GitHub Profiles**: Enter a GitHub username and retrieve detailed profile information.
- **Profile Details**:
  - Avatar, username, and GitHub link
  - Join date, bio, and location
  - Public repositories, followers, and following
  - Blog URL and company details (if available)
  - Twitter handle (if linked)
- **Dark Mode**: Toggle between light and dark modes for comfortable browsing.
  
## Live Demo

You can access and explore the GitProfile Explorer [here](https://gaytri-thakre.github.io/GitProfile-Explorer/).

## How to Use

1. Open the live demo in your browser.
2. Type a valid GitHub username in the search bar and click the "Search" button or press Enter.
3. The app will fetch and display the GitHub profile details.
4. Toggle the dark mode by clicking the moon/sun icon in the top right corner.

## Code Overview

The project consists of a few core components:

### HTML

- The HTML structure provides the layout for the search bar, profile display, and dark mode button.

### CSS

- Includes styling for the light and dark modes, ensuring a smooth transition between both modes.

### JavaScript

- **API Integration**: Fetches data from the GitHub API using the entered username.
- **Profile Rendering**: Dynamically updates the DOM with profile details like avatar, bio, repositories, and more.
- **Dark Mode Toggle**: Users can switch between light and dark modes. The app saves the user's preference using `localStorage`.
  
#### Key Functions

- **getUserData**: Fetches user data from the GitHub API.
- **updateProfile**: Updates the profile information on the page.
- **darkModeProperties & lightModeProperties**: Toggles between dark and light modes by changing CSS variables.
- **init**: Initializes the app, checks for dark mode preferences, and loads default profile info.

### Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/gaytri-thakre/GitProfile-Explorer.git
