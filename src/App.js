import React from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import beastData from './data.json';
import Container from 'react-bootstrap/Container'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Header title='Horned Emporium' />
        <Main imageURLs={beastData} />
        <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
