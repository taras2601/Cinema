import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from './features/MoviesContainer';
import DetailPageContainer from './features/DetailPageContainer';
//import MoviesItem from './features/MoviesItem';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={MoviesContainer} />
                    <Route path="/:item" component={DetailPageContainer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
