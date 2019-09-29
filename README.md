1.FIRST STERP
-----------------------------------------------------------------------------------------------------------------------------
OMDB API
Movies application page
create an application for searching movies on OMDB API
Register on the following URL: http://www.omdbapi.com/ 
How to register? 
    1. Press the API key on the top navbar
    2. Insert your mail and set for free account
    3. Verify your registration on the mail
    4. The API key will be inside the mail: 
    5. OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4f743453

	Read the documentation inside the page (URL Above), Under usage and parameters.
	Read and find the way to execute a request to the API for searching movies.

Create the following components:
MoviesPage
This component will be a container component with state, the API call will be executed from this component on click event, for example get request with axios package:
Axios.get(http://www.omdbapi.com/?apikey=4f7462e2&s=scream)
SearchComponent – children of MoviesPage
Will contain input text for the movie search, button – search, send the input result onclick to the MoviesPage
MoviesList – will receive movies as props and render the movie
Movie – Movie card that will present each movie with all the information from the API

Loader – loader will be presented when the user is waiting for search result, starting when the search click event fired and end on the API responded
Advanced:
Implement routing in your application with the following routes:
MoviesPage
HomePage –component with header – HOME PAGE
