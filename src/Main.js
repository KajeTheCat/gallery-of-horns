import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeastImg from "./BeastImg.js";

class Main extends React.Component {
  render() {
    return (
      <Container className="main">
        <Row>
          <Col>
            <BeastImg image_url={this.props.imageURLs[0].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[1].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[2].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[3].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImg image_url={this.props.imageURLs[4].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[5].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[6].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[7].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImg image_url={this.props.imageURLs[8].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[9].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[10].image_url} />
          </Col>
          <Col>
            <BeastImg image_url={this.props.imageURLs[11].image_url} />
          </Col>
        </Row>
      </Container>
    )
  };
};

export default Main;