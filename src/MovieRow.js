import React from 'react';

export default class MovieRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td><img className="poster-lg" src="movie poster_url" alt="poster for movie title" /></td>
                <td>{this.props.data['title']}</td>
                <td>Movie Release Date</td>
            </tr>
        );
    }
}