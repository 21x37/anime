import React from 'react';
import axios from 'axios';
import uuid from 'uuid';

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
        if (this.state.offset !== this.props.offset) {
            await this.setState((prevState) => {
                return {
                    animes: [],
                    offset: prevState.offset - 10,
                    loading: true
                };
            });
        } else {
            await this.setState(() => {
                return {
                    animes: [],
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
                    animes: [],
                    offset: parseInt(this.props.offset),
                    loading: true
                };
            });
        } else {
            await this.setState((prevState) => {
                return {
                    animes: [],
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
        <div>
            <p>--------------------------------------------------------</p>
            <button onClick={this.onClickRight}>Forward</button>
            <button onClick={this.onClickLeft}>Back</button>
            {this.state.animes.map((anime) => {
                    return (
                        <div key={uuid()}>
                            <p>{anime.title}</p>
                            <p>{anime.description}</p>
                            <p>{anime.episodes}</p>
                            <p>{anime.ageRating}</p>
                        </div>
                    )
                })}
        </div>
    )}
}

export default KitsuRow;