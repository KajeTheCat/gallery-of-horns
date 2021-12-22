import React from "react";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {

    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card style={{ width: '20rem'}}>
            <Card.Img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} />
            <Card.Text>{this.props.selectedBeast.horns}</Card.Text>
            <Card.Text>{this.props.selectedBeast.description}</Card.Text>
            </Card>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default SelectedBeast