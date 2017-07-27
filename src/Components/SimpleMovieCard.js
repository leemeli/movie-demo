import React from 'react';
import { Link } from 'react-router-dom';


var baseImageUrl = "https://image.tmdb.org/t/p/original";


class SimpleMovieCard extends React.Component {
    render() {
        return(
            <Link to={'/movie/' + this.props.data.id} className="simple-movie-card">
                <img src={baseImageUrl + '/' + this.props.data.poster_path} alt="movie poster" />
                <h2>{this.props.data.title}</h2>
            </Link>
        );
    }
}

export default SimpleMovieCard;