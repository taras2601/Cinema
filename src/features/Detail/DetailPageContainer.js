import React, { Component } from 'react';
import DetailPage from './DetailPage';

export default class DetailPageContainer extends Component {
    state = {
        sortBy: null,
        selectedMovie: {},
        movies: [
            {id: 1, title: 'Terminator 2', genre: 'Action', url: 'https://thumbs.dfs.ivi.ru/storage28/contents/e/1/e1dfdde30a290f4b1ba15c94677365.jpg'},
            {id: 2, title: 'The Mechanic', genre: 'Action', url: 'https://thumbs.dfs.ivi.ru/storage36/contents/1/9/0f5e761649bc0a5eb0cbdabd55e4f1.jpg'},
            {id: 3, title: 'Rambo 2', genre: 'Action', url: 'https://thumbs.dfs.ivi.ru/storage28/contents/6/9/4cb787d15d5550214aaa49d0f62941.jpg'},
            {id: 4, title: 'Home Alone 2', genre: 'Comedy', url: 'https://thumbs.dfs.ivi.ru/storage2/contents/9/a/9fce421c70fccef48e3121b157ba01.jpg'},
            {id: 5, title: 'Harry Potter', genre: 'Fantasy', url: 'https://thumbs.dfs.ivi.ru/storage32/contents/f/1/fa1195288d29d4b053334a8a5c9dae.jpg'},
            {id: 6, title: 'Indiana Jones', genre: 'Adventure', url: 'https://thumbs.dfs.ivi.ru/storage36/contents/6/d/c8e6eabc9edd5d2326526af36fe7ab.jpg'},
            {id: 7, title: 'Die Hard 4', genre: 'Action', url: 'https://thumbs.dfs.ivi.ru/storage15/contents/2/2/12b3ecb6892bd2b524c7ffe71be30c.jpg'},
            {id: 8, title: 'The Pink Panther', genre: 'Comedy', url: 'https://thumbs.dfs.ivi.ru/storage15/contents/7/b/a0239579a225ea5fb7df422574c7ca.jpg'},], 
    }

    setSelectedMovie = (data) => {
        this.setState({selectedMovie: data});
    };

    setSortBy = (value) => {
        this.setState({sortBy: value});
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
                this.setSortBy(res.genres)
            });
    };

    componentDidMount() {
        this.fetchMovies();
    };
        
    render() {
        console.log(this.state.sortBy);
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
