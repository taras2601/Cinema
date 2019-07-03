import React, { Component } from 'react';
import MoviesList from './MoviesList';
const ENDPOINT = 'https://reactjs-cdp.herokuapp.com';
const serialize = function(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

export default class MoviesContainer extends Component {
    state = {
        search: '',
        movies: [],
    }

    setSearch = (value) => {
        this.setState({search: value});
    };

    setMovies = (movie) => {
        this.setState({movies: movie});
    };

    searchMovies = () => {
        this.fetchMovies({sortOrder: 'desc', searchBy: 'title', search: this.state.search});
    };
    
    fetchMovies = (params = {sortOrder: 'desc'}) => {
        const url = `${ENDPOINT}/movies?${serialize(params)}`;
        fetch(url)
            .then(res => res.json())
            .then(({data}) => {
                this.setMovies(data);
            });
            console.log(url);
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
                    searchMovies = {this.searchMovies}
                    fetchMovies = {this.fetchMovies}
                />
            </div>
        );
    }
}
