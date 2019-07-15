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
        searchBy: '',
        sortBy: '',
        movies: [],
    }

    setSearch = (value) => {
        this.setState({search: value});
    };

    setMovies = (movie) => {
        this.setState({movies: movie});
    };

    searchMovies = () => {
        this.fetchMovies({sortOrder: 'desc', sortBy: this.state.sortBy, searchBy: this.state.searchBy, search: this.state.search});
    };

    setSearchBy = (value) => {
        this.setState({searchBy: value})
    };

    setSortBy = (value) => {
        this.setState({sortBy: value});
        this.searchMovies();
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

    componentDidMount() {
        this.fetchMovies();
    }
    
    render() {
        return (
            <div>
                <MoviesList 
                    search = {this.state.search}
                    movies = {this.state.movies}
                    searchBy = {this.state.searchBy}
                    sortBy = {this.state.sortBy}

                    setSearch = {this.setSearch}
                    setMovies = {this.setMovies}
                    setSearchBy = {this.setSearchBy}
                    setSortBy = {this.setSortBy}
                    searchMovies = {this.searchMovies}
                    fetchMovies = {this.fetchMovies}
                />
            </div>
        );
    }
}
