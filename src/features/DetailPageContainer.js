import React, { Component } from 'react';
import DetailPage from './DetailPage';
const id = 389;

export default class DetailPageContainer extends Component {
    state = {
        selectedMovie: {}, 
    }

    setSelectedMovie = (data) => {
        this.setState({selectedMovie: data});
    };

    fetchMovies = () => {
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(res => {
                this.setSelectedMovie(res);
            });
            console.log();
    };

    componentDidMount() {
        this.fetchMovies();
    };
        
    render() {
        //const id = this.props.match.params;
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
