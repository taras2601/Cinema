import React, { Component } from 'react';

export default class DetailePage extends Component {
    render() {
        const { selectedMovie } = this.props;
        return (
            <div>
                <div>
                    <img src={selectedMovie.img} />
                </div>
                <div>
                    <h1>{selectedMovie.title}</h1>
                    <p>{selectedMovie.genre}</p>
                </div>
            </div>
        );
    }
}
