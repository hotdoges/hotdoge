import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class Test2 extends React.Component {
    constructor(props) {
        super(props);
        // this.props.router.push('/test');
        
    }
    
    render() {
        return (
            <div>
                <h1>我是2号</h1>
            </div>
        );
    }
}

Test2.propTypes = {

}

export default withRouter(Test2);