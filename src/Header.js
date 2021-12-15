import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
render() {
    return (
    <Navbar>
        <Navbar.Brand>
            <h1>{this.props.title}</h1>
        </Navbar.Brand>
    </Navbar>
    )
}
};

export default Header;