
import React from "react";
import Form from "react-bootstrap/Form";
import beastData from './data.json'

class Search extends React.Component {

    handleChange = (e) => {
        console.log(e.target.value);
        const selection = e.target.value;
        let updatedNums;

        if (selection === "One") {
            updatedNums = beastData.filter(beastHorns => beastHorns.horns === 1);
            this.props.findBeast(updatedNums);
        } else if (selection === "Two") {
            updatedNums = beastData.filter(beastHorns => beastHorns.horns === 2);
            this.props.findBeast(updatedNums);
        } else if (selection === "Three") {
            updatedNums = beastData.filter(beastHorns => beastHorns.horns === 3);
            this.props.findBeast(updatedNums);
        } else if (selection === "100") {
            updatedNums = beastData.filter(beastHorns => beastHorns.horns === 100);
            this.props.findBeast(updatedNums);
        } else {
            this.props.findBeast(beastData);
        };
    }

    render() {
        return (
            <div className="Search">
                <Form>
                    <Form.Label>Number of Horns</Form.Label>
                    <br />
                    <Form.Select onChange={this.handleChange}>
                        <option value="All">Unfiltered</option>
                        <option value="One">One Horn</option>
                        <option value="Two">Two Horns</option>
                        <option value="Three">Three Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Select>
                </Form>
            </div>
        );
    }
}

export default Search;