import React, { Component } from 'react';
import MoviesItem from './MoviesItem'

export default class MoviesList extends Component {

    handlerChangeSearch = (event) => {
        this.props.setSearch(event.target.value);
    };

    handlerClickSearch = () => {
        this.props.searchMovies();
    };

    handlerClickSearchBy = (event) => {
        this.props.setSearchBy(event.target.value)
    };

    handlerClickSortBy = (event) => {
        this.props.setSortBy(event.target.value)
    };

    render() {
        const { searchBy, sortBy } = this.props;
        const classBtnTitle = searchBy === 'title' ? 'btn btn-primary btn-sm' : 'btn btn-sm';
        const classBtnGenres = searchBy === 'genres' ? 'btn btn-primary btn-sm ml-2' : 'btn btn-sm ml-2';
        const classBtnRating = sortBy === 'rating' ? 'btn btn-link text-danger' : 'btn btn-link';
        const classBtnData = sortBy === 'data' ? 'btn btn-link text-danger' : 'btn btn-link';
        
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
                <div className='row justify-content-center mt-2'>
                    <div className="col-sm-1">
                        <p>SearchBy:</p>
                    </div>
                    <div className="col-sm-1">
                        <button className={classBtnTitle} value='title' onClick={this.handlerClickSearchBy}>Title</button>
                    </div>
                    <div className="col-sm-1">
                        <button className={classBtnGenres} value='genres' onClick={this.handlerClickSearchBy}>Genres</button>
                    </div>
                    <div className="col-sm-1">
                        <p>SortBy:</p>
                    </div>
                    <div className="col-sm-1">
                        <button className={classBtnRating} value='vote_average' onClick={this.handlerClickSortBy}>Rating</button>
                    </div>
                    <div className="col-sm-1">
                        <button className={classBtnData} value='release_date' onClick={this.handlerClickSortBy}>Data</button>
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
                            rating = {item.vote_average}
                            data = {item.release_date}
                        />
                    )}
                </div>
            </div>
        );
    }
}
