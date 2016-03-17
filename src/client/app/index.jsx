import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AnotherComponent from './AnotherComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> HELLO React!!!!! </p>
        <AwesomeComponent />
        <AnotherComponent />
      </div>
      );
  }
}

render(<App/>, document.getElementById('app'));