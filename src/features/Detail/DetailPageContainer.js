import React, { Component } from 'react';
import DetailPage from './DetailPage';

export default class DetailPageContainer extends Component {
    state = {
        sortBy: [],
        selectedMovie: {},
        movies: [], 
    }

    setSelectedMovie = (data) => {
        this.setState({selectedMovie: data});
    };

    setSortBy = (value) => {
        this.setState({sortBy: value});
    };

    setMovies = (movies) => {
        this.setState({movies: movies});
    };

    fetchMovies = () => {
        const id = this.props.match.params.id;
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(res => {
                this.setSelectedMovie(res);
                return res;
            })
            .then(res => {
                this.setSortBy(res.genres);
                fetch(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&filter=${this.state.sortBy}`)
                    .then(res => res.json())
                    .then(({data}) => {
                        this.setMovies(data)
                    })
            });       
    };

    componentDidMount() {
        this.fetchMovies();
    };
        
    render() {
        return (
            <div>
                <DetailPage
                    selectedMovie = {this.state.selectedMovie}
                    movies = {this.state.movies}
                    sortBy = {this.state.sortBy}
                    setSelectedMovie = {this.setSelectedMovie}
                />
            </div>
        );
    }
}
