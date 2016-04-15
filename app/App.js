import React, {Component} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <About/>
        <Contact/>
      </div>
    );
  }
}

export default App;