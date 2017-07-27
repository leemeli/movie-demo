import React from 'react';
import SimpleMovieCard from '../Components/SimpleMovieCard';


import controller from '../MovieController';
import moment from 'moment';
import { Link } from 'react-router-dom';


var baseImageUrl = "https://image.tmdb.org/t/p/original";

class Search extends React.Component {
    /*
      Use this page to get data to show more detailed information of movies.
      The movie ID is located in the URL, and can be accessed with this.props.match.params.movieId.
      The movie ID parameter is established in index.js in the /movie route. You can use this ID
      to get more data for the movie when this page mounts. Remember, this is a page (higher level component), 
      not a view component! Get data here, but consider passing down to components for separation of concerns.
    */

    constructor(props) {
        super(props);

        this.state = {};
        this.loadSearchResults = this.loadSearchResults.bind(this);
    }

    componentDidMount() {
        var query = this.props.match.params.query;
        this.loadSearchResults(query);
    }

    componentWillReceiveProps(nextProps) {
        // update data if URL params change
        if (this.props.match.params.query != nextProps.match.params.query) {
            this.loadSearchResults(nextProps.match.params.query);
        }
    }

    loadSearchResults(query) {
        controller.search(query)
            .then((data) => {
                console.log('movie data', data);
                this.setState({ movies: data.results });
            });
    }

    render() {
        var cards = [];
        if (this.state.movies) {
            cards = this.state.movies.map((movie) => {
                return <SimpleMovieCard data={movie} key={movie.id + '-simple-movie-card'} />;
            });
        }

        return (
            <div>
                {/* Movie detail components go here */}
                {/* {this.state.movie && //conditionally render MovieCard when state.movie exists
          <MovieCard data={this.state.movie} />} */}

                {cards}
            </div>
        );
    }
}

export default Search;
