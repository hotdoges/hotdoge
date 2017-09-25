import React from 'react';
import PropTypes from 'prop-types';

class Test1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: 'strTest1',
        };
    }

    render() {
        return (
            <li>{this.props.user._id} , {this.props.user.name}</li>
        );
    }
}

Test1.propTypes = {
    //这个组件通过React prop去得到并显示任务
    //我们可以用propTypes去指明哪些是必须的
    user: PropTypes.object.isRequired,

}

export default Test1;