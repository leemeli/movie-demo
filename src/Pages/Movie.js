import React from 'react';

import controller from '../MovieController';
import moment from 'moment';
import { Link } from 'react-router-dom';


var baseImageUrl = "https://image.tmdb.org/t/p/original";

class Movie extends React.Component {
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
    this.loadMovie = this.loadMovie.bind(this);
  }

  componentDidMount() {
    var movieId = this.props.match.params.movieId;
    this.loadMovie(movieId);
    this.loadSimilarMovies(movieId);
  }

  componentWillReceiveProps(nextProps) {
    // update data if URL params change
    if (this.props.match.params.movieId != nextProps.match.params.movieId) {
      this.loadMovie(nextProps.match.params.movieId);
      this.loadSimilarMovies(nextProps.match.params.movieId);
    }
  }

  loadMovie(movieId) {
    controller.getMovieDetails(movieId)
      .then((data) => {
        console.log('movie data', data);
        this.setState({ movie: data });
      });
  }

  loadSimilarMovies(movieId) {
    controller.getSimilarMovies(movieId)
      .then((data) => {
        this.setState({ similarMovies: data.results.slice(0, 5) });
      });
  }

  render() {
    return (
      <div>
        {/* Movie detail components go here */}
        {this.state.movie && //conditionally render MovieCard when state.movie exists
          <MovieCard data={this.state.movie} />}

        {this.state.similarMovies &&
          <div className="similar-movies">
            <h2>Similar Movies</h2>
            <MoviePosterList movies={this.state.similarMovies} />
          </div>}
      </div>
    );
  }
}

class MovieCard extends React.Component {
  render() {
    var genres = this.props.data.genres.map((genre) => {
      return genre.name;
    });

    return (
      <div className="movie-card">
        <img src={baseImageUrl + '/' + this.props.data.poster_path} alt="movie poster" />

        <section>
          <h2>{this.props.data.title}</h2>
          <h3>{moment(this.props.data.release_date).format('MMM Do, YYYY') + ' | ' + this.props.data.runtime + ' minutes'}</h3>
          <p>{this.props.data.overview}</p>
          <p>{genres.join(', ')}</p>
        </section>
      </div>
    );
  }
}

class MoviePosterList extends React.Component {
  render() {
    var movies = this.props.movies.map((movie) => {
      return (
        <Link to={'/movie/' + movie.id} key={movie.id + '-movie-poster-item'}>
          <img src={baseImageUrl + '/' + movie.poster_path} alt="movie poster" />
        </Link>
      );
    });

    return (
      <div className="movie-poster-list">
        {movies}
      </div>
    );
  }
}

export { MovieCard }; // use this to export lower-level components
export default Movie;
