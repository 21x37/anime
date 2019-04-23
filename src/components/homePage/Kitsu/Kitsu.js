import React from 'react';
import axios from 'axios';
import KitsuRow from './Rows/KitsuRow';

class Kitsu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            offset: 0,
            loading: true,
            clickedRow: 0,
            clickedTitle: ''
        }
        this.onClickRight = this.onClickRight.bind(this);
        this.onClickLeft = this.onClickLeft.bind(this);
        this.onAnimeClicked = this.onAnimeClicked.bind(this);
    }
    async componentDidMount() {
        axios.get('/kitsu/api')
        .then((res) => {
            this.setState(() => {
                return {
                    animes: res.data,
                    loading: false
                };
            });
            console.log(res);
        });
    };
    async onClickLeft() {
        if (this.state.offset !== 0) {
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
                    offset: 12062,
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
        if (this.state.offset === 12062) {
            await this.setState(() => {
                return {
                    animes: [],
                    offset: 0,
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
    async onAnimeClicked(row, title) {
        console.log(row)
        if (title !== this.state.clickedTitle) {
            await this.setState(() => {
                return {
                    clickedRow: row,
                    clickedTitle: title
                }
            });
        } else {
            await this.setState(() => {
                return {
                    clickedRow: 0,
                    clickedTitle: ''
                }
            })
        }


    };
    render() {
        return (
            <div>
                {this.state.loading && <p>Loading...</p>}
                <KitsuRow row='1' allowShowcaseAnime={this.state.clickedRow === '1'} clickedTitle={this.state.clickedTitle} onAnimeClicked={this.onAnimeClicked} offset='0'/>
                <KitsuRow row='2' allowShowcaseAnime={this.state.clickedRow === '2'} clickedTitle={this.state.clickedTitle} onAnimeClicked={this.onAnimeClicked} offset='300'/>
                <KitsuRow row='3' allowShowcaseAnime={this.state.clickedRow === '3'} clickedTitle={this.state.clickedTitle} onAnimeClicked={this.onAnimeClicked} offset='600'/>
                <KitsuRow row='4' allowShowcaseAnime={this.state.clickedRow === '4'} clickedTitle={this.state.clickedTitle} onAnimeClicked={this.onAnimeClicked} offset='900'/>
            </div>
        );
    };
};

export default Kitsu;