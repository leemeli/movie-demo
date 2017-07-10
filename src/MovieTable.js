import React from 'react';
import MovieRow from './MovieRow';

//table of movie data
export default class MovieTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        //can interact with this.props here

        return (
            <table className="table table-condensed">
                <thead>
                    <tr><th className="col-xs-1">Poster</th><th className="col-xs-4">Title</th><th>Released</th></tr>
                </thead>
                <tbody>

                    <MovieRow data = {this.props.movies[0]}/>
                    <MovieRow data = {this.props.movies[1]}/>

                </tbody>
            </table>
        );
    }
}