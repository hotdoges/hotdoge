import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <h1>我是Main</h1>
                {/* {this.props.children} */}
            </div>
        );
    }
}

MainLayout.propTypes = {

}

export default MainLayout;