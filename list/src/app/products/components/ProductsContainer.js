import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';



const ProductsCotainer = (props) => {

    // const { fruitList, vegetableList, dairyList, meatAndFishList,
    //      dryGoodsList, householdItemsList, othersList } = props.products;

    const handleDeleteClickFruit = (e) => {
        props.deleteProduct(props.products.fruitList[e.target.id], e.target.id)
    };

    // const handleDeleteClickVegetable = (e) => {
    //     props.deleteProduct(vegetableList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickDairy = (e) => {
    //     props.deleteProduct(dairyList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickMeatAndFish = (e) => {
    //     props.deleteProduct(meatAndFishList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickDryGoods = (e) => {
    //     props.deleteProduct(dryGoodsList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickHouseholdItems = (e) => {
    //     props.deleteProduct(householdItemsList[e.target.id], e.target.id)
    // };

    // const handleDeleteClickOthers = (e) => {
    //     props.deleteProduct(othersList[e.target.id], e.target.id)
    // };

    let shoppingList = [];
    for (let [key, value] of Object.entries(props.products)) {
        
        props.products[key].length !== 0 
        ?

        // for (let i = 0; i < Object.keys(props.products).length; i++) {
            shoppingList.push(<div>
                <h1>{key}</h1>
               <ul>
            {value.map((product) =>
                <li

                    id={value.indexOf(product)}
                    key={product}
                    onClick={handleDeleteClickFruit}
                    >
                    {product}
                </li>)}
        </ul>
            </div>)
            :
            trr = []
        }
    return (<div>
        {shoppingList}
    </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    deleteProduct: (item, productId) => dispatch(actions.deleteProduct(item, productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCotainer)