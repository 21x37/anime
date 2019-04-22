import React from 'react';
import axios from 'axios';
import KitsuRow from './Rows/KitsuRow';

class Kitsu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            offset: 0,
            loading: true
        }
        this.onClickRight = this.onClickRight.bind(this);
        this.onClickLeft = this.onClickLeft.bind(this);
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
    render() {
        return (
            <div>
                {this.state.loading && <p>Loading...</p>}
                <KitsuRow offset='0'/>
                <KitsuRow offset='300'/>
                <KitsuRow offset='600'/>
                <KitsuRow offset='900'/>
            </div>
        );
    };
};

export default Kitsu;