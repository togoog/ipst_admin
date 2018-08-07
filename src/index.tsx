import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Admin from './mooc-admin';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
