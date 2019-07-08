import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MoviesItem extends Component {
    render() {
        const { id, poster, title, genres } = this.props;
        return (
            <div>
                <div className='moviesItem'>
                    <Link to={`movies/${id}`}>
                        <img src={poster} alt={title} />
                        <h2>{title}</h2>
                        <p>{genres}</p>
                    </Link>
                </div>
            </div>
        );
    }
}
