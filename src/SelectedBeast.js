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
            <Modal.Title>123</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card>
                <Card.Img src={'#'} alt={'#'} />
                <Card.Text>
                    ???
                </Card.Text>
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