import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import queryString from 'query-string';
import Favicon from 'react-favicon';
import PropTypes from 'prop-types';

import styles from './AppContainer.module.css';
import { userDataType } from './../types';
import UserList from './../components/UserList.js';
import UserProfile from './../components/UserProfile.js';

const favicon = require('./../favicon.ico');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getUserByName = this.getUserByName.bind(this);
    this.getSelectedUserName = this.getSelectedUserName.bind(this);
    this.handleRenderUserList = this.handleRenderUserList.bind(this);
    this.handleRenderUserProfile = this.handleRenderUserProfile.bind(this);
  }

  getUserByName(name) {
    return this.props.users.find(user => 
      user.name.toLowerCase() === (name || '').toLowerCase()
    );
  }

  getSelectedUserName() {
    const { name } = queryString.parse(window.location.search);
    return name || null;
  }

  handleRenderUserList() {
    if (this.getSelectedUserName()) {
      return null;
    }

    return <UserList users={this.props.users}/>;
  }

  handleRenderUserProfile() {
    const selectedUserName = this.getSelectedUserName();
    if (!selectedUserName) {
      return null;
    }

    const user = this.getUserByName(selectedUserName);
    if (!user) {
      return null;
    }

    document.title = `${user.name} - Profile`;
    window.scrollTo(0, 0);
    return <UserProfile user={user}/>;
  }

  render() {
    if (!(this.props.users || []).length) {
      return <div>Users not found</div>;
    }

    return (
      <BrowserRouter>
        <main>
          <Favicon url={favicon}/>
          <Route render={this.handleRenderUserList}/>
          <Route render={this.handleRenderUserProfile}/>
        </main>
      </BrowserRouter>
    );
  }
}

AppContainer.users = PropTypes.arrayOf(userDataType);

export default AppContainer;
