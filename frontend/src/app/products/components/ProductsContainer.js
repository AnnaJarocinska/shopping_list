import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const ProductsCotainer = (props) => {

    const handleDeleteClickProduct = (e) => {
        for (let value of Object.values(props.products)) {
        let actionItem = e.target.getAttribute('name')
            value.list.includes(actionItem) 
            && 
            props.deleteProduct(actionItem, e.target.id)
    }}

    const shoppingList = [];
    for (let [key, value] of Object.entries(props.products)){
        if (props.products[key].list.length !== 0) {
        shoppingList.push(
            <div 
            key={key}>
                <h1>{value.name}</h1>
                <ul>{value.list.map((product) =>
                    <li
                        id={value.list.indexOf(product)}
                        key={product}
                        name={product}
                        onClick={handleDeleteClickProduct}>
                        {product}
                    </li>)}
                </ul>
            </div>)
    }
}
    
return (<>
    {shoppingList}
</>
)}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    deleteProduct: (item, productId) => dispatch(actions.deleteProduct(item, productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCotainer)