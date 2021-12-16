import React from 'react';
import Image from 'react-bootstrap/Image';

class BeastImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "status": 0,
        }
    }

    handleClick = () => {
        this.setState({
            status: this.state.status + 1,
        });
    }

    render() {
        return (
            <>
                <div onClick={this.handleClick}>
                    <Image src={this.props.image_url} alt='alt coming soon...' rounded fluid  />
                    <h3>💖{this.state.status}</h3>
                </div>
            </>
        )
    }
};

export default BeastImg;