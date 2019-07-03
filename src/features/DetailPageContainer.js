import React, { Component } from 'react';
import DetailPage from './DetailPage';

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
        this.setSelectedMovie({ 
            id: 0,
            title: 'Indiana Jones',
            genre: 'Adventure',
            poster_path: 'https://thumbs.dfs.ivi.ru/storage8/contents/6/d/c8e6eabc9edd5d2326526af36fe7ab.jpg',
            overview: 'В 1938 году нацисты ведут охоту за Священным Граалем и похищают главного специалиста в этой области – Джонса-старшего. Возмужавшему ученому-авантюристу Индиане придется выручать своего отца из плена.'
        });
        this.setMovies ([  
            {id: 1, title: 'Terminator 2', genre: 'Action', poster_path: 'https://thumbs.dfs.ivi.ru/storage28/contents/e/1/e1dfdde30a290f4b1ba15c94677365.jpg'},
            {id: 2, title: 'The Mechanic', genre: 'Action', poster_path: 'https://thumbs.dfs.ivi.ru/storage8/contents/1/9/0f5e761649bc0a5eb0cbdabd55e4f1.jpg'},
            {id: 3, title: 'Rambo 2', genre: 'Action', poster_path: 'https://thumbs.dfs.ivi.ru/storage28/contents/6/9/4cb787d15d5550214aaa49d0f62941.jpg'},
            {id: 4, title: 'Home Alone 2', genre: 'Comedy', poster_path: 'https://thumbs.dfs.ivi.ru/storage6/contents/8/e/53fe565d3a5e89f513b04a23c63688.jpg'},
            {id: 5, title: 'Harry Potter', genre: 'Fantasy', poster_path: 'https://thumbs.dfs.ivi.ru/storage32/contents/f/1/fa1195288d29d4b053334a8a5c9dae.jpg'},
            {id: 6, title: 'Indiana Jones', genre: 'Adventure', poster_path: 'https://thumbs.dfs.ivi.ru/storage8/contents/6/d/c8e6eabc9edd5d2326526af36fe7ab.jpg'},
            {id: 7, title: 'Die Hard 4', genre: 'Action', poster_path: 'https://thumbs.dfs.ivi.ru/storage15/contents/2/2/12b3ecb6892bd2b524c7ffe71be30c.jpg'},
            {id: 8, title: 'The Pink Panther', genre: 'Comedy', poster_path: 'https://thumbs.dfs.ivi.ru/storage9/contents/6/a/9ff0541a11ff19b4e4a84f1b9c56ca.jpg'},
        ]);    
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
                    setSelectedMovie = {this.setSelectedMovie}
                    setMovies = {this.setMovies}
                />
            </div>
        );
    }
}
