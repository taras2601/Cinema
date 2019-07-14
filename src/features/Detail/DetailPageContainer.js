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

    // setSortBy = (value) => {
    //     this.setState({sortBy: value});
    // };

    setMovies = (movies) => {
        this.setState({movies: movies});
    };

    fetchDetailMoviesAndFilterGenres = () => {
        const id = this.props.match.params.id;
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(res => {
                this.setSelectedMovie(res);
                return res;
            })
            .then(res => {
                fetch(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&filter=${res.genres}`)
                    .then(res => res.json())
                    .then(({data}) => {
                        this.setMovies(data)
                    })
            });       
    };

    componentDidMount() {
        this.fetchDetailMoviesAndFilterGenres();
    };
        
    render() {
        console.log(this.state.selectedMovie.genres);
        return (
            <div>
                <DetailPage
                    selectedMovie = {this.state.selectedMovie}
                    movies = {this.state.movies}
                    setSelectedMovie = {this.setSelectedMovie}
                />
            </div>
        );
    }
}
