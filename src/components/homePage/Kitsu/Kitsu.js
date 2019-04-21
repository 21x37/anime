import React from 'react';
import axios from 'axios';

class Kitsu extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        axios.get('/kitsu/api')
        .then((res) => {
            console.log(res);
        });

    }
    render() {
        return (
            <div>

            </div>
        );
    };
};

export default Kitsu;