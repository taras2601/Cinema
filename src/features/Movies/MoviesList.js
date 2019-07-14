import React, { Component } from 'react';
import MoviesItem from './MoviesItem'

export default class MoviesList extends Component {

    handlerChangeSearch = (event) => {
        this.props.setSearch(event.target.value);
    };

    handlerClickSearch = () => {
        this.props.searchMovies();
    };

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center mt-2'>
                    <div className="col-sm-11">
                        <input className='form-control' onChange={this.handlerChangeSearch} />
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-warning" onClick={this.handlerClickSearch}>Search</button>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {this.props.movies.map(item =>
                        <MoviesItem
                            key = {item.id} 
                            id = {item.id}
                            title = {item.title}
                            genres = {item.genres.join(' ')}
                            poster = {item.poster_path}
                        />
                    )}
                </div>
            </div>
        );
    }
}
