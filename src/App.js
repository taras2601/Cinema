import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from './features/Movies/MoviesContainer';
import DetailPageContainer from './features/Detail/DetailPageContainer';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={MoviesContainer} />
                    <Route path="/movies/:id" component={DetailPageContainer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
