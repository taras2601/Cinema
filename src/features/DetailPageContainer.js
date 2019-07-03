import React, { Component } from 'react';
import DetailePage from './DetailPage';

export default class DetailPageContainer extends Component {
    state = {
        selectedMovie: 
            {id: 1, 
            title: 'Terminator 2', 
            genre: 'Action', 
            img: 'https://thumbs.dfs.ivi.ru/storage28/contents/e/1/e1dfdde30a290f4b1ba15c94677365.jpg'},
    }

    render() {
        return (
            <div>
                <DetailePage
                    selectedMovie={this.state.selectedMovie}
                />
            </div>
        );
    }
}
