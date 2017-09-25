import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class OneLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.history.push('/main');
    }

    render() {
        return (
            <div >
                <h1>我是1号Layout</h1>
                <h2>{this.props.match.url}</h2>
                {/* {this.props.children} */}
                <a onClick={this.handleClick.bind(this)}>main</a>
                <ul></ul>
                <Link to="/main">main_link</Link>
            </div>
        );
    }
}

OneLayout.propTypes = {

}

export default OneLayout;