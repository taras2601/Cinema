import React, { Component } from 'react';
import MoviesItem from './MoviesItem'

export default class MoviesList extends Component {

    handlerChangeSearch = (event) => {
        this.props.setSearch(event.target.value);
    };

    handlerClickSearch = () => {
        this.props.setMovies();
    };

    render() {
        return (
            <div>
                <input onChange={this.handlerChangeSearch} value={this.props.value} />
                <button onClick={this.handlerClickSearch}>Search</button>
                <div>
                    {this.props.movies.map(item =>
                        <MoviesItem
                            key = {item.id} 
                            id = {item.id}
                            title = {item.title}
                            poster = {item.poster_path}
                        />
                    )}
                </div>
            </div>
        );
    }
}
