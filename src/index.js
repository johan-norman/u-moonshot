import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

// Import CSS reset and Global Styles
import './global-styles';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
