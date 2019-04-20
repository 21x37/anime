import React from 'react';
import fetchKitsu from '../../api/kitsu';

class Kitsu extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const response = await fetchKitsu();
        console.log(response);
    }
    render() {
        return (
            <div>

            </div>
        );
    };
};

export default Kitsu;