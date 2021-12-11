import React from 'react';

class Beast extends React.Component {
render() {
    return (
    <>
        <h2>Creature: {this.props.title}</h2>
        <p>Description: {this.props.description}</p>
        <img src={this.props.img_url} alt={this.props.title}/>
    </>
    )
}
};

export default Beast;