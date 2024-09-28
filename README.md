# T16-Project-1

## Project Introduction
Team 16 has created a website for viewing the top 20 rated movies from IMDb, using The Movie Database (TMDb) REST API: [The Movie Database](https://www.themoviedb.org/). The website consists of three main pages:
- **Landing Page**: `/project1/`
- **List View Page**: `/project1/listViewPage`
- **Movie Detail Page**: `/project1/movie/:movieId`

A navigation bar makes navigating between the **Landing Page** and the **List View Page** easy, and users can click on any movie to view more detailed information on the movie's own dedicated page. 

## How to Run the Project

### Running Locally
1. Clone the project from the GitHub repository: [T16-Project-1](https://git.ntnu.no/IT2810-H24/T16-Project-1/tree/main).
2. Open a terminal and run the following command:
    ```sh
    npm run dev
    ```
3. The terminal should output: http://localhost:5173/project1
4. Open your browser and go to: [http://localhost:5173/project1](http://localhost:5173/project1)

### Running on the VM
The project is hosted on a web server on our Virtual Machine (VM). To access it:
- You need to be connected to Eduroam on Campus
- Go to: [http://it2810-16.idi.ntnu.no/project1/](http://it2810-16.idi.ntnu.no/project1/)

## Project Pages and Storage Usage

### 1. Landing Page ("Swipes")
- The **Landing Page** (also called the "Swipes" page) allows users to view movie posters one by one using arrow buttons.
- Each movie can be favorited by hovering over the poster, and more information can be accessed by clicking the poster.
- The current "active" movie is stored in `sessionStorage`, ensuring that users will not be sent back to the first movie unless they close the tab.

### 2. List View Page ("All Movies")
- The **List View Page** shows all 20 movies by default.
- Users can filter movies by category, favorite movies by hovering over the poster, and view detailed information by clicking the poster.
- The selected filter is stored in `sessionStorage`, ensuring the filter remains active until the user closes the tab.

### 3. Movie Page
- The **Movie Detail Page** provides more information about a selected movie.
- Users can also favorite the movie directly from this page.

### Local Storage for Favorites
- Whether a movie is favorited or not is stored in `localStorage`, meaning each user will have their favorite movies saved across sessions.

## Testing
The website uses a framework called **Vitest** to make sure that each part of the website behaves as intended. This includes tests of different kinds such as:
- **Snapshot tests**: Takes a "snapshot" of the initial state and compares later instances of the page or component to the initial state to ensure consistency. 
- **Prop tests**: Checks that components work as intended when receiving data from other parts of the code.
- **State tests**: Makes sure that the state of the component responds accordingly when the website is interacted with.
- **Mocking**: To make sure that testing the page doesn't overload the API from which the website pulls its data, **mocks** are used, a technique that lets the website be rendered with "fake" data, only used for testing.

In addition, the website has also been tested manually, with different devices to make sure that it works for users across all platforms. 

Tests have been made for the following pages and components:
- **moviePage.tsx**
- **swipePage.tsx**
- **movieCard.tsx**
- **likeButton.tsx**
- **filterDropdown.tsx**
- **errorMessage.tsx**

### Running tests
To run the tests, simply navigate to the terminal and input the command:
```sh
npm run test
```

## Todos
- Add an option to view favourited movies.
