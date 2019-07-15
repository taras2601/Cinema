import React, { Component } from 'react';

export default class DetailePage extends Component {
    render() {
        const { selectedMovie, movies } = this.props;
        console.log(selectedMovie);
        return (
            <div className='container'>
                <div className='row justify-content-center mt-4'>
                    <div className="col-md-4">
                        <div className='movieDetail'>
                            <img className="img-thumbnail" alt={selectedMovie.title} src={selectedMovie.poster_path} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1>{selectedMovie.title}</h1>
                        <p>{selectedMovie.overview}</p>
                        <p><b>GENRES :</b> {selectedMovie.genres}</p>
                        <p><b>RELEASE DATA :</b> {selectedMovie.release_date}</p>
                        <p><b>RATING :</b> {selectedMovie.vote_average}</p>
                        <p><b>ALL VOTERS :</b> {selectedMovie.vote_count}</p>
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>
                        {movies.map(item =>
                            <div className="col-lg-2 col-md-3 col-sm-6 moviesItem" key={item.id}>
                                <img className="img-thumbnail" alt={item.title} src={item.poster_path} />
                                <h5>{item.title}</h5>
                                <p>{item.release_date}</p>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}
