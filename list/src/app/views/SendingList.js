import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import SendingEmail from '../email/components/SendingEmail';

const SendingList = (props) => {

    const { fruitList, vegetableList, dairyList, meatAndFishList, dryGoodsList, householdItemsList, othersList } = props.products;

    return (<Fragment>
           <p>Sending list</p>
           
           <div>
               <p>Content of shopping list</p>
        <p>
            {fruitList.length !== 0 ? 'fruits' : ''}
        </p>
        <ul>
            {fruitList.map((product) =>
                <li
                    key={product}>
                    {product}
                </li>)}
        </ul>

        <p>
            {vegetableList.length !== 0 ? 'vegetables' : ''}
        </p>
        <ul>
            {vegetableList.map(product =>
                <li key={product}
                    >
                    {product}
                </li>)}
        </ul>

        <p>
            {dairyList.length !== 0 ? 'dairy' : ''}
        </p>
        <ul>
            {dairyList.map(product =>
                <li key={product}
                   >
                    {product}
                </li>)}
        </ul>

        <p>
            {meatAndFishList.length !== 0 ? 'meat and fish' : ''}
        </p>
        <ul>
            {meatAndFishList.map(product =>
                <li key={product}
                   >
                    {product}
                </li>)}
        </ul>

        <p>
            {dryGoodsList.length !== 0 ? 'dry goods' : ''}
        </p>
        <ul>
            {dryGoodsList.map(product =>
                <li key={product}
                    >
                    {product}
                </li>)}
        </ul>

        <p>
            {householdItemsList.length !== 0 ? 'household items' : ''}
        </p>
        <ul>
            {householdItemsList.map(product =>
                <li key={product}
                    >
                    {product}
                </li>)}
        </ul>

        <p>
            {othersList.length !== 0 ? 'others' : ''}
        </p>
        <ul>
            {othersList.map(product =>
                <li key={product}>
                    {product}
                </li>)}
        </ul>
           </div>

           <SendingEmail/>
           <Link to="/">Back to adding recipent</Link>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, null)(SendingList);