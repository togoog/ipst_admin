import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './pages/demo/Life';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App name="sss" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
