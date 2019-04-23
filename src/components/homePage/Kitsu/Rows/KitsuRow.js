import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import IndividualShow from './IndividualShow';

class KitsuRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            clickedTitle: '',
            offset: parseInt(this.props.offset)

        };
        this.onClickRight = this.onClickRight.bind(this);
        this.onClickLeft = this.onClickLeft.bind(this);
        this.animeClicked = this.animeClicked.bind(this);
    };
    async componentDidMount() {
        const response = await axios.get(`/kitsu/api?offset=${this.state.offset}`);

        this.setState(() => {
            return {
                animes: response.data
            };
        });

    };
    async onClickLeft() {
        if (this.state.offset !== parseInt(this.props.offset)) {
            await this.setState((prevState) => {
                return {
                    offset: prevState.offset - 10,
                    loading: true
                };
            });
        } else {
            await this.setState(() => {
                return {
                    offset: parseInt(this.props.offset) + 300,
                    loading: true
                };
            });
        };

        const response = await axios.get(`/kitsu/api?offset=${this.state.offset}`);
        this.setState(() => {
            return {
                animes: response.data,
                loading: false
            };
        });

    };
    async onClickRight() {
        if (this.state.offset === parseInt(this.props.offset) + 300) {
            await this.setState(() => {
                return {
                    offset: parseInt(this.props.offset),
                    loading: true
                };
            });
        } else {
            await this.setState((prevState) => {
                return {
                    offset: prevState.offset + 10,
                    loading: true
                };
            });
        };

        const response = await axios.get(`/kitsu/api?offset=${this.state.offset}`);
        this.setState(() => {
            return {
                animes: response.data,
                loading: false
            };
        });
    };
    async animeClicked(anime) {
        console.log(anime.title);
        await this.props.onAnimeClicked(this.props.row, anime);

        if (this.props.allowShowcaseAnime) {
            if (this.state.clickedTitle !== anime.title) {
                this.setState({ clickedTitle: anime.title })
            } else {
                this.setState({ clickedTitle: null })
            };
        };
    }
    render() {
        return (
        <div className='kitsu-row'>
            <button onClick={this.onClickLeft}>Back</button>
            {this.state.animes.map((anime) => {
                console.log(anime);
                    return (
                        <div className='individual-show-container' key={uuid()}>
                            <IndividualShow 
                                title={anime.title} 
                                description={anime.description} 
                                episodes={anime.episodes}
                                ageRating={anime.ageRating}
                                image={anime.image}
                                width={this.props.clickedTitle === anime.title ? '250px' : '150px'}
                                animeClicked={this.animeClicked}
                            />
                        </div>
                    )
                })}
            <button onClick={this.onClickRight}>Forward</button>
        </div>
    )}
}

export default KitsuRow;