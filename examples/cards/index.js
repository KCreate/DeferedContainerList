import React, { Component } from 'react';
import { render } from 'react-dom';
import DeferedContainerList from 'deferedcontainerlist';

const cards = [
    ['card number one', 'card number two', 'card number three'],
    ['hello world one', 'hello world two', 'hello world three'],
    ['something else one', 'something else two', 'something else three']
];

class App extends Component {

    constructor(...args) {
        super(...args);
        this.onchange = this.onchange.bind(this);
        this.state = {
            selected: 0
        };
    }

    onchange(event) {
        this.setState({
            selected: Math.min(2, Math.max(0, Number(event.target.value)))
        });
    }

    render() {

        const activeStyle = {
            opacity: 1,
            transition: 'opacity 150ms ease-in'
        };

        const hiddenStyle = {
            opacity: 0,
            transition: 'opacity 150ms ease-out'
        };

        return (
            <div>
                <input type="number" value={this.state.selected} onChange={this.onchange}></input>
                <DeferedContainerList
                    delay={150}
                    activeStyle={activeStyle}
                    hiddenStyle={hiddenStyle}
                >{cards[this.state.selected].map((text, index) => {
                    return (
                        <div key={index} style={{ backgroundColor: 'red' }}>
                            <h1>{text}</h1>
                        </div>
                    );
                })}</DeferedContainerList>
            </div>
        );
    }
}

render((
    <App />
), document.getElementById('app'));
