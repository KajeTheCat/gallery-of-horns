import React from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This is a Test!</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
