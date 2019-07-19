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
        if (event.target.value === 'vote_average') {
            this.props.movies.sort((a, b) => (b.vote_average > a.vote_average) ? 1 : ((a.vote_average > b.vote_average) ? -1 : 0));
        } else {
            this.props.movies.sort((a, b) => (b.release_date > a.release_date) ? 1 : ((a.release_date > b.release_date) ? -1 : 0));
        }
        console.log(this.props.movies, event.target.value)
    };

    render() {
        const { searchBy, sortBy } = this.props;
        const classBtnTitle = searchBy === 'title' ? 'btn btn-primary btn-sm ml-2' : 'btn btn-sm ml-2';
        const classBtnGenres = searchBy === 'genres' ? 'btn btn-primary btn-sm ml-2' : 'btn btn-sm ml-2';
        const classBtnRating = sortBy === 'vote_average' ? 'btn btn-link text-danger' : 'btn btn-link';
        const classBtnData = sortBy === 'release_date' ? 'btn btn-link text-danger' : 'btn btn-link';
        
        return (
            <div className='container'>
                <div className='row justify-content-center mt-2'>
                    <div className="col-sm-10">
                        <input className='form-control' onChange={this.handlerChangeSearch} />
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-block btn-outline-primary" onClick={this.handlerClickSearch}>Search</button>
                    </div>
                </div>
                <div className='row justify-content-center mt-2'>
                <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                        <div className="font-weight-bold">
                            SearchBy:
                        </div>
                        <div>
                            <button className={classBtnTitle} value='title' onClick={this.handlerClickSearchBy}>Title</button>
                        </div>
                        <div>
                            <button className={classBtnGenres} value='genres' onClick={this.handlerClickSearchBy}>Genres</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="d-flex align-items-center justify-content-end">
                        <div className="font-weight-bold">
                            SortBy:
                        </div>
                        <div>
                            <button className={classBtnRating} value='vote_average' onClick={this.handlerClickSortBy}>Rating</button>
                        </div>
                        <div>
                            <button className={classBtnData} value='release_date' onClick={this.handlerClickSortBy}>Data</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className='row justify-content-center bg-light'>
                    {this.props.movies.map(item =>
                        <MoviesItem
                            key = {item.id} 
                            id = {item.id}
                            title = {item.title}
                            genres = {item.genres.join(', ')}
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
