import React, { Component } from 'react';
import DetailePage from './DetailPage';
const ENDPOINT = 'https://reactjs-cdp.herokuapp.com';

export default class DetailPageContainer extends Component {
    state = {
        selectedMovie: {},
        movies: []
    }

    setSelectedMovie = (movie) => {
        this.setState({selectedMovie: movie});
    };

    setMovies = (movie) => {
        this.setState({movies: movie});
    };

    fetchMovies = () => {
        const url = `${ENDPOINT}/movies?${serialize(params)}`;
        fetch(url)
            
    };

    render() {
        return (
            <div>
                <DetailePage
                    selectedMovie = {this.state.selectedMovie}
                    movies = {this.state.movies}
                    setSelectedMovie = {this.setSelectedMovie}
                    setMovie = {this.setMovie}
                />
            </div>
        );
    }
}
