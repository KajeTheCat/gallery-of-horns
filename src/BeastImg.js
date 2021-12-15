import React from 'react';

class BeastImg extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            'status': 'YAY!'
        }
    }

    handleClick = () => {
        if (this.state.status === 'Nay!') {
            this.setState({status: 'YAY!'})
        } else {
            this.setState({status: 'Nay!'})
            }
        }

render() {
    return (
    <>
        <img src={this.props.image_url} alt='alt coming soon...' onClick={this.handleClick} />
        <h3>{this.state.status}</h3>
    </>
    )
}
};

export default BeastImg;