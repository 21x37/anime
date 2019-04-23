import React from 'react';
import uuid from 'uuid';

class IndividualShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '150px',
            visible: false,
            clicked: false
        }
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
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
        } else {
            
        }

    }
    onMouseLeave() {
        if (this.state.clicked === false) {
            this.setState(() => {
                return {
                    width: '150px',
                    visible: false
                };
            });
        }
    };
    onClick() {
        this.props.animeClicked(this.props.title);
        // if (this.state.clicked) {
        //     this.setState(() => {
        //         return {
        //             width: '150px',
        //             clicked: false
        //         };
        //     });
        // } else {
        //     this.setState(() => {
        //         return {
        //             width: '250px',
        //             clicked: true
        //         }
        //     })
        // }

    }
    render() {
        return (
                 <div onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} onClick={this.onClick} key={uuid()}>
                    <h3>{this.TextAbstract(this.props.title)}</h3>
                    {false && <p>{this.props.description}</p> }
                    {false && <p>{this.props.episodes} episodes</p> }
                    {false && <p>{this.props.ageRating}</p> }
                    <img style={{ width: this.props.width }} src={this.props.image}/>
                </div>
        );
    };
};

export default IndividualShow;