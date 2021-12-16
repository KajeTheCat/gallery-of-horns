import React from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beastData from './data.json';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Header title='Horned Emporium' />
        <Main imageURLs={beastData} />
        <Footer text ='Made by Jacob' />
        </Container>
      </div>
    );
  }
}

export default App;
