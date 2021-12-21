
import React from "react";
import HornedBeast from "./HornedBeast.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row sm={1} md={2} lg={3} xl={4} >
          {this.props.beastData.map((beastObj, idx) => (
            <HornedBeast beast={beastObj} key={idx} showModal={this.props.showModal} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;