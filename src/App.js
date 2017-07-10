import React from 'react';
import MovieTable from './MovieTable';

var SAMPLE_MOVIES = [
  {
    title: "Star Wars: The Force Awakens",
    release_date: "2015-12-15",
    poster_url: "https://image.tmdb.org/t/p/w92/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg"
  },
  { title: "Zootopia", release_date: "2016-02-11", poster_url: "https://image.tmdb.org/t/p/w92/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg" },
  { title: "Inception", release_date: "2010-07-14", poster_url: "https://image.tmdb.org/t/p/w92/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" }
];

//overall App
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Movie Search</h1>
        </header>
        <main>
          <MovieTable movies={SAMPLE_MOVIES} />
        </main>
      </div>
    );
  }
}

export default App;
