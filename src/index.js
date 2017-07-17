import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter, Route, IndexRoute } from 'react-router-dom';

//pages
import Home from './Pages/Home';
import Movie from './Pages/Movie';


//css files
import './index.css';

ReactDOM.render(
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:movieId" component={Movie} />
    </App>
  </HashRouter>,
  document.getElementById('root')
);