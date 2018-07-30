import * as React from 'react';
import './App.css';
// base components
import LayoutComponent from 'src/base-components/layout'
// import logo from './logo.svg';

// 引入less styl没生效
import './pages/demo/style.less'
import './pages/demo/style.styl'
import './app.less'
class App extends React.Component {
  public render() {
    return (
      <div className="">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <LayoutComponent />
      </div>
    );
  }
}

export default App;
