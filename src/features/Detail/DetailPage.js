import React, { Component } from 'react';

export default class DetailePage extends Component {
    render() {
        const { selectedMovie, movies } = this.props;
        return (
            <div>
                <div className='movieDetail'>
                    <img alt={selectedMovie.title} src={selectedMovie.poster_path} />
                </div>
                <div>
                    <h1>{selectedMovie.title}</h1>
                    <p>{selectedMovie.genres}</p>
                    <p>{selectedMovie.overview}</p>
                </div>
                {/* <div className='moviesList'>
                    {movies.map(item =>
                        <div className='moviesItem' key = {item.id}>
                            <img alt={item.title} src={item.poster_path} />
                            <h2>{item.title}</h2>
                        </div>
                    )}
                </div> */}
            </div>
        );
    }
}
