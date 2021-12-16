import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
    render() {
    return (
    <Navbar className="footer">
        <Navbar.Brand>
        <h1>{this.props.text}</h1>
        </Navbar.Brand>
    </Navbar>
    )
}
};

export default Footer;