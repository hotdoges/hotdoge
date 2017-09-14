import React from 'react';
import PropTypes from 'prop-types';

class OneLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <h1>我是1号Layout</h1>
                {/* {this.props.children} */}
            </div>
        );
    }
}

OneLayout.propTypes = {

}

export default OneLayout;