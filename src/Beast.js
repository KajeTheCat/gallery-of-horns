import React from 'react';

class Beast extends React.Component {
render() {
    return (
    <>
        <h1>Title: {this.props.title}</h1>
        <p>This is a Test!{this.props.description}</p>
    </>
    )
}
};

export default Beast;