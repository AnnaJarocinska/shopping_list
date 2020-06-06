import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import actions from '../duck/actions';
import ErrorsInForm from './ErrorsInForm';

class ProductsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            selectValue: "-",
            isImportant: false,
        }}

    handleSelectChange = (e) => {
        this.setState({
            selectValue: e.target.value
        })}

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })}

    handleCheckboxChange = () => {
        this.setState({
            isImportant: !this.state.isImportant
        })}

    handleResetClick = () => {
        this.props.reset();
    }

    errorsInForm = null

   

    addProduct = (event) => {
        event.preventDefault();
        this.props.add(this.state.inputValue, this.state.selectValue, this.state.isImportant);
        console.log('this.state.selectValue',this.state.selectValue)
        console.log('this.state.inputValue',this.state.inputValue)
        this.setState({
            inputValue: "",
            selectValue: "-"
        })
        this.errorsInForm = <ErrorsInForm category = {this.state.selectValue}/>
    }


    render() {
        return (<>
        
        <form onSubmit={this.addProduct}>
            <input value={this.state.inputValue} onChange={this.handleInputChange}></input>

            <label>Choose a category:</label>
            <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                <option value="-">-</option>
                <option value="Fruits">fruit</option>
                <option value="Vegetables">vegetable</option>
                <option value="Dairy">dairy</option>
                <option value="Meat and fish">meat and fish</option>
                <option value="Dry goods">dry goods</option>
                <option value="Household items">household items</option>
                <option value="Others">others</option>
            </select>
            <label>important</label>
            <input type="checkbox" onChange={this.handleCheckboxChange} />
            <button type='submit'>Add product</button>

            <button onClick={this.handleResetClick}> Reset all list </button> 
            <Link to="/">Back</Link>
            <Link to="/adding_recipent">Add recipent</Link>
        </form>
     
        {this.errorsInForm}
        </>
        )}
}


const mapDispatchToProps = dispatch => ({
    add: (product, category, importance) => dispatch(actions.add(product, category, importance)),
    reset: () => dispatch(actions.reset())
})


export default connect(null, mapDispatchToProps)(ProductsForm);

