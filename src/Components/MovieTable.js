import React from 'react';
import MovieRow from './MovieRow';

//table of movie data
export default class MovieTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        //can interact with this.props here
        var rows = this.props.movies.map((movie, index) => {
            return <MovieRow key={'movie-' + index} data={movie} />;
        });

        return (
            <table className="table table-condensed">
                <thead>
                    <tr><th className="col-xs-1">Poster</th><th className="col-xs-4">Title</th><th>Released</th></tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}