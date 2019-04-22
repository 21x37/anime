import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import IndividualShow from './IndividualShow';

class KitsuRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            offset: parseInt(this.props.offset)

        };
        this.onClickRight = this.onClickRight.bind(this);
        this.onClickLeft = this.onClickLeft.bind(this);
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
    render() {
        return (
        <div className='kitsu-row'>
            <button onClick={this.onClickLeft}>Back</button>
            {this.state.animes.map((anime) => {
                    return (
                        <div className='individual-show-container' key={uuid()}>
                            <IndividualShow 
                                title={anime.title} 
                                description={anime.description} 
                                epsiodes={anime.episodes}
                                ageRating={anime.ageRating}
                                image={anime.image}
                            />
                        </div>
                    )
                })}
            <button onClick={this.onClickRight}>Forward</button>
        </div>
    )}
}

export default KitsuRow;