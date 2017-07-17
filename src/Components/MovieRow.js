import React from 'react';
import { Link } from 'react-router-dom';

var baseImageUrl = "https://image.tmdb.org/t/p/w92";

export default class MovieRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var image = 'No movie poster';
        if(this.props.data.poster_path) {
            image = <img className="poster-lg" src={baseImageUrl + '/' + this.props.data.poster_path} alt="poster for movie title" />;
        }

        return (
            <tr>
                <td>{image}</td>
                <td><Link to={'/movie/' + this.props.data.id}>{this.props.data['title']}</Link></td>
                <td>{this.props.data.release_date}</td>
            </tr>
        );
    }
}