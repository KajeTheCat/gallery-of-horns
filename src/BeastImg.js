import React from 'react';
import Card from 'react-bootstrap/Card';

class BeastImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    }

    addFavorites = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render() {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Title>{this.props.beast.title}</Card.Title>
                <Card.Img src={this.props.beast.image_url} alt='alt coming soon...' title='title coming soon...' onClick={this.addFavorites} />
                <Card.Text>{this.props.beast.description}</Card.Text>
                <Card.Text>💖 = {this.state.favorites}</Card.Text>
            </Card>
        )
    }
}

export default BeastImg;