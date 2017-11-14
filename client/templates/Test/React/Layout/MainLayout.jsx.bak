import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Users } from '../../../../../imports/collections/users.js';

import Test1 from '../Test1.jsx'

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    renderUserTest() {
        return [
            { _id: 1, name: 'This is task 1' },
            { _id: 2, name: 'This is task 2' },
            { _id: 3, name: 'This is task 3' },
        ];
    }

    renderUsers() {
        //console(users);
        return this.props.users.map((user) => (
            // <Test1 key={user._id} user={user}></Test1>
            <li style={{ fontSize: '18px' }} key={user._id}> {user.name}, {user.createdAt.toString()} </li>
        ));
    }

    handleSubmit(event) {
        event.preventDefault();

        // 通过React的ref拿到文本字段
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        const findname = Users.findOne({ 'name': text });

        if(findname == null) {
            console.log('查找不到用户');
            
        } else {
            console.log(findname);
        }
        
        // 清空表单
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
            <div >
                <h1>我是Main</h1>
                <h2>{this.props.match.url}</h2>

                <ul>
                    {this.renderUsers()}
                </ul>

                <form onSubmit={this.handleSubmit.bind(this)} >
                    <input
                        type="text"
                        ref="textInput"
                        placeholder="输入姓名"
                    />
                </form>
                <ul>
                    <li>{this.props.findname._id} , {this.props.findname.name}</li>
                </ul>
            </div>
        );
    }
}

MainLayout.propTypes = {
    users: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        users: Users.find({}).fetch(),
    };
}, MainLayout);