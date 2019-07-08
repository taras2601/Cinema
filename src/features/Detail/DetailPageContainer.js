import React, { Component } from 'react';
import DetailPage from './DetailPage';

export default class DetailPageContainer extends Component {
    state = {
        selectedMovie: {}, 
    }

    setSelectedMovie = (data) => {
        this.setState({selectedMovie: data});
    };

    fetchMovies = () => {
        const id = this.props.match.params.id;
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(res => {
                this.setSelectedMovie(res);
            });
    };

    componentDidMount() {
        this.fetchMovies();
    };
        
    render() {
        console.log(this.state.selectedMovie);
        return (
            <div>
                <DetailPage
                    selectedMovie = {this.state.selectedMovie}
                    setSelectedMovie = {this.setSelectedMovie}
                />
            </div>
        );
    }
}
