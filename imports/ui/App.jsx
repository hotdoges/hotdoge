import React, { Component } from 'react';

import Task from './Task.jsx';

export default class App extends Component {
    getString() {
        return "火热doge";
    }

    render() {
        return (
            <div className="app">
                <header>
                    <h1>{this.getString()}</h1>
                </header>

                <h2>你好啊</h2>
            </div>
        );
    }
}

