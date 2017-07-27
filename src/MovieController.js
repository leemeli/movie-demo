//TMDB constants (https://developers.themoviedb.org/3/getting-started)
var apiKey = "d37398a8fa01ed9f121f9074b614e320";
var baseApiUrl = "https://api.themoviedb.org/3";

var controller = {
    search(query) {
        var resource = '/search/movie';
        var uri = baseApiUrl + resource + '?api_key=' + apiKey + '&query=' + query;


        return fetch(uri).then((response) => {
            return response.json();
        });
    },

    getMovieDetails(movieId) {
        var resource = '/movie/' + movieId;
        var uri = baseApiUrl + resource + '?api_key=' + apiKey;


        return fetch(uri).then((response) => {
            return response.json();
        });
    },

    getSimilarMovies(movieId) {
        var resource = '/movie/' + movieId + '/similar';
        var uri = baseApiUrl + resource + '?api_key=' + apiKey;


        return fetch(uri).then((response) => {
            return response.json();
        });
    }
};

export default controller;