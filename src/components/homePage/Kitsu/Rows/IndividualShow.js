import React from 'react';
import uuid from 'uuid';

class IndividualShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '150px',
            visible: false
        }
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    TextAbstract(text) {
        if (text == null) {
            return "";
        }
        if (text.length <= 14) {
            return text;
        }
        text = text.substring(0, 14);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "...";
    }
    onMouseOver() {
        if (this.state.width === '150px') {
            this.setState(() => {
                return {
                    width: '250px',
                    visible: true
                }
            })
            console.log('fired');
        } else {
        }

    }
    onMouseLeave() {
        this.setState(() => {
            return {
                width: '150px',
                visible: false
            }
        })
    }
    render() {
        return (
                 <div onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} key={uuid()}>
                    <h3>{this.TextAbstract(this.props.title)}</h3>
                    {false && <p>{this.props.description}</p> }
                    {false && <p>{this.props.episodes} episodes</p> }
                    {false && <p>{this.props.ageRating}</p> }
                    <img style={{width: this.state.width }} src={this.props.image}/>
                </div>
        );
    };
};

export default IndividualShow;