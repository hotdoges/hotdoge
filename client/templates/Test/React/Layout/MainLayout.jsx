import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// import Test2 from '../Test2';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <h1>我是Main</h1>
                {/* <Route path="/mtest" component="Test2"/> */}
                {/* {this.props.children} */}
            </div>
        );
    }
}

MainLayout.propTypes = {

}

export default MainLayout;