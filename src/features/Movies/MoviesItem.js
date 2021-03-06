import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MoviesItem extends Component {
    render() {
        const { id, poster, title, genres, rating, data } = this.props;
        return (
            <div className="col-lg-2 col-md-3 col-sm-6 mt-4 moviesItem">
                <Link to={`movies/${id}`}>
                    <img className="img-thumbnail" src={poster} alt={title} />
                    <h5>{title}</h5>
                    <div className="small">{genres}</div>
                    <div className="small">{rating}</div>
                    <div className="small">{data}</div>
                </Link>
            </div>                   
        );
    }
}
