import React from 'react';

class ShowcasedAnime extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <h1>{this.props.anime.title}</h1>
                <img style={{width: '300px'}} src={this.props.anime.image}/>
                <p>{this.props.anime.ageRating}</p>
                <p>{this.props.anime.episodes ? `Episodes: ${this.props.anime.episodes}` : ''}</p>
                <p>{this.props.anime.description}</p>
            </div>
        );
    };
};

export default ShowcasedAnime;