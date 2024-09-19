# T16-Project-1
Project introduction:
    Team 16 have decided to create a webpage for viewing the 20 top rated movies from imdb, based on the REST API of the movie database: https://www.themoviedb.org/. The webpage includes three pages: project1/, project1/listViewPage and project1/movie/:movieId. The landing page and the list view page are connected through a navbar, and each movie can be clicked to view more information about the selected movie.

How to run:
    Locally:
    To run the project locally, pull the code from the main branch in the project github: https://git.ntnu.no/IT2810-H24/T16-Project-1/tree/main.
    Open terminal and run the command: npm run dev
    This should give you this line: 
        Local:   http://localhost:5173/project1
    Go to: http://localhost:5173/project1

    VM:
    Go to: http://it2810-16.idi.ntnu.no/project1/. The project is hosted on a webserver on our VM.

Project pages, including how to use and session/local storage:
    Landing page/"Swipes":
    The landing page/"Swipes" page allows the user to view movie posters one by one by using the arrows buttons, with the option to favourite each movie when hovering and to view more info by clicking the movie poster. Which movie is "active" in this page is stored in sessionStorage, meaning the user will not be sent back to the first movie unless they close the tab.

    List view/"All movies":
    The list view/"All movies" page shows all 20 movies by default, and allows the user to filter on category and also favourite each movie when hovering and to view more info by clicking the movie poster. The filter is stored in sessionStorage, meaning the filter will stay active until the user close the tab.

    Movie page:
    The movie page allows the user to view more info about the movie, in addition to allowing the user to favourite the movie.

    Local storage:
    Whether a movie is favourited or not is stored in localStorage, meaning each user will have their own favorited movies stored as favourites.

Testing: