import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.createClass {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                {this.props.children}
            </div>
        );
    }
}

MainLayout.propTypes = {

}

export default MainLayout;