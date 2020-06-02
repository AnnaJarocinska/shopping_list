import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const ProductsCotainer = (props) => {

    const handleDeleteClickProduct = (e) => {
        for (let list of Object.keys(props.products)) {
        let actionItem = e.target.getAttribute('name')
        props.products[list].forEach(element => { 
            element.includes(actionItem) && props.deleteProduct(element, e.target.id)})
    }}

    const shoppingList = [];
    for (let [key, value] of Object.entries(props.products)){
        if (props.products[key].length !== 0) {
        shoppingList.push(
            <div 
            key={key}>
                <h1>{key}</h1>
                <ul>{value.map((product) =>
                    <li
                        id={value.indexOf(product)}
                        key={product}
                        name={product}
                        onClick={handleDeleteClickProduct}>
                        {product}
                    </li>)}
                </ul>
            </div>)
    }
}
    
return (<div>
    {shoppingList}
</div>
)}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    deleteProduct: (item, productId) => dispatch(actions.deleteProduct(item, productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCotainer)