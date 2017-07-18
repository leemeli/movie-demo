import React from 'react';

class Movie extends React.Component {
  /*
    Use this page to get data to show more detailed information of movies.
    The movie ID is located in the URL, and can be accessed with this.props.match.params.movieId.
    The movie ID parameter is established in index.js in the /movie route. You can use this ID
    to get more data for the movie when this page mounts. Remember, this is a page (higher level component), 
    not a view component! Get data here, but consider passing down to components for separation of concerns.
  */

  render() {
    return (
      <div>
        {/* Movie detail components go here */}
        Movie Details
      </div>
    );
  }
}

export default Movie;
