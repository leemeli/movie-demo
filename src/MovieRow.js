import React from 'react';

export default class MovieRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td><img className="poster-lg" src={this.props.data['poster_url']} alt={this.props.data['title']} /></td>
                <td>{this.props.data['title']}</td>
                <td>{this.props.data['release_date']}</td>
            </tr>
        );
    }
}