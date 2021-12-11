import React from 'react';

class Beast extends React.Component {
render() {
    return (
    <>
        <h1>Title: {this.props.title}</h1>
        <p>I can put any text {this.props.description}</p>
    </>
    )
}
};

export default Beast;