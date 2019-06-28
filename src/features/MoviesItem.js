import React, { Component } from 'react';

export default class MoviesItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.poster} alt={this.props.title} />
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
