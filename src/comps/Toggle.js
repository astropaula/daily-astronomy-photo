import React, { useState, Component } from 'react';
import { render } from '@testing-library/react';


export default class Toggle extends Component {

    state = {
        on: false,
    };

    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };
    render() {
        return (
            <div>
                <button className='button' onClick={this.toggle}>Want to know more?</button>
                {this.state.on && this.props.children}


            </div>
        )
    }
}