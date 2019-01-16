import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer.js';

const users = require('./mock-data/users.json');

ReactDOM.render(
    <AppContainer users={users}/>,
    document.getElementById('root')
);
