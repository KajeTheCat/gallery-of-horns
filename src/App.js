import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js'
import json from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      status: 0,
      show: false,
      result: (''),
    };
  }

  showSelectedBeast = () => {
    this.setState({show: true});
  }

  onHide = () => {
    this.setState({show: false})
  }

  sendBackData = (title) => {
    const result = json.find( (element) => element.title === title);
    this.setState({result, show: true})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main json = {json} showSelectedBeast={this.props.showSelectedBeast} sendBackData={this.sendBackData}/>
        <Footer />
        <SelectedBeast show={this.state.show} onHide={this.onHide} result={this.state.result} />
      </div>
  );
}
}

export default App;