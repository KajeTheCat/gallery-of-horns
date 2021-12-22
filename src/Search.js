
import React from "react";
import Form from 'react-bootstrap/Form';


const numOfHorns = [0, 1, 2, 3];

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: numOfHorns
        };
    };
};

handleChange = (e) => {
    console.log(e.target.value);
    const selection = e.target.value;
    let updatedNums;

    if (selection === "one") {
        updatedNums = numOfHorns.filter(num => num === 1);
        this.setState({ nums: updatedNums });
    } else if (selection === "two") {
        updatedNums = numOfHorns.filter(num => num === 2);
        this.setState({ nums: updatedNums });
    } else if (selection === "three") {
        updatedNums = numOfHorns.filter(num => num === 3);
        this.setState({ nums: updatedNums });
    } else {
        this.setState({ nums: numOfHorns });
    };
};

render() {
    return (
        <div className="Search">
            <Form>
                <Form.Label>Number of Horns</Form.Label>
                <br />
                <Form.Select onChange={this.handleChange}>
                    <option value="none">Unfiltered</option>
                    <option value="One">One Horn</option>
                    <option value="Two">Two Horns</option>
                    <option value="Three">Three Horns</option>
                </Form.Select>
            </Form>
            <p>{this.state.nums}</p>
        </div>
    );
};

export default Search;