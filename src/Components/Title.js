import React, { Component } from 'react';


class Title extends Component {
    render() {
        return (
            <>
                <h1> {this.props.title} </h1>
                <h2>{this.props.subtitle} </h2>
            </>
        )
    }
}

export default Title;