import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MoviesItem extends Component {
    render() {
        return (
            <div>
                <div className='moviesItem'>
                    <Link to={`movies/${this.props.id}`}>
                        <img src={this.props.poster} alt={this.props.title} />
                        <h2>{this.props.title}</h2>
                    </Link>
                </div>
            </div>
        );
    }
}
