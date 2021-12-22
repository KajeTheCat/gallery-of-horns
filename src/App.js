import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main';
import SelectedBeast from './SelectedBeast.js'
import beastData from './data.json'
import Footer from './Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {},
    };
  }

  showModal = (beastTitle) => {
    const selectedBeast = beastData.find(beastObj => beastObj.title === beastTitle)
    this.setState({ show: true, selectedBeast: selectedBeast });
  }

  onHide = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          beastData={beastData}
          showModal={this.showModal} />
        <SelectedBeast
          show={this.state.show}
          onHide={this.onHide}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;