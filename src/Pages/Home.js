import React from 'react';
import MovieTable from '../Components/MovieTable';

import controller from '../MovieController';

class Home extends React.Component {
    constructor(props) {
        super(props); // call super

        this.state = {}; // set initial state
        this.handleChange = this.handleChange.bind(this); // bind method to 'this' context
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        var fields = {};
        fields[event.target.name] = event.target.value;
        this.setState(fields);
    }

    handleSearch() {
        controller.search(this.state.query)
            .then((data) => { // on success
                this.setState({ movies: data.results }); // set state to results
            });
    }

    render() {
        return (
            <div>
                <main>
                    <input type="text" name="query" onChange={this.handleChange} />
                    <button onClick={this.handleSearch}>Search</button>

                    <MovieTable movies={this.state.movies ? this.state.movies : []} />
                </main>
            </div>
        );
    }
}

export default Home;
