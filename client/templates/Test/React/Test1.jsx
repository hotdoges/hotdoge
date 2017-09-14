import React from 'react';
import PropTypes from 'prop-types';

class Test1 extends React.Component {
    constructor(props) {
        super(prop);
        this.state = {
            str: 'strTest1',
        };
    }

    render() {
        return (
            <div>
                <h1>我是1号,
                    {this.state.str}
                </h1>
            </div>
        );
    }
}

Test1.propTypes = {

}

export default Test1;