import React, { Component } from 'react';
import MoviesList from './MoviesList';

export default class MoviesContainer extends Component {
    state = {
        search: '',
        movies: [],
    }

    setSearch = (value) => {
        this.setState({search: value});
    };

    setMovies = () => {
        const movie = [{
            "id":8388,
            "title":"¡Three Amigos!",
            "poster_path":"https://image.tmdb.org/t/p/w500/zuTwahw966MoFwD7B2SFujaT5yp.jpg",
        }];
        this.setState({movies: movie})
    };

    
    render() {
        console.log(this.state.movies)
        return (
            <div>
                <MoviesList 
                    search = {this.state.search}
                    movies = {this.state.movies}
                    setSearch = {this.setSearch}
                    setMovies = {this.setMovies}
                />
            </div>
        );
    }
}
