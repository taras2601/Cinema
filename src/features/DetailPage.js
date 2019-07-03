import React, { Component } from 'react';

export default class DetailePage extends Component {
    render() {
        const { selectedMovie, movies } = this.props;
        return (
            <div>
                <div>
                    <img src={selectedMovie.poster_path} />
                </div>
                <div>
                    <h1>{selectedMovie.title}</h1>
                    <p>{selectedMovie.genre}</p>
                    <p>{selectedMovie.overview}</p>
                </div>
                <div className='moviesList'>
                    {movies.map(item =>
                        <div className='moviesItem' key = {item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.poster_path} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
