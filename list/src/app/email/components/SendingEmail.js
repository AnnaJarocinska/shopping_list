import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const SendingEmail = (props) => {
console.log('props', props)

    const handleEmailButtonClick = (e) => {
        
        e.preventDefault();
        const fruits = props.products.fruitList;
        const vegetables = props.products.vegetableList;
        const dairy = props.products.dairyList;
        const meatAndFish = props.products.meatAndFishList;
        const dryGoods = props.products.dryGoodsList;
        const householdItems = props.products.householdItemsList;
        const others = props.products.othersList;
        const email = props.email.email;
        const message = props.email.message;

        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: {
                fruits: `FRUITS: ${fruits}`,
                vegetables: `VEGETABLES: ${vegetables}`,
                dairy: `DAIRY: ${dairy}`,
                meatAndFish: `MEAT AND FISH: ${meatAndFish}`,
                dryGoods: `DRY GOODS: ${dryGoods}`,
                householdItems: `HOUSEHOLD ITEMS: ${householdItems}`,
                others: `OTHERS: ${others}`,
                email: email,
                message:`MESSAGE: ${message}`,
            }

        }).then((response,) => {
            if (response.data.msg === 'success') {
                console.log("Message Sent.");
                toast.success(`Shopping list has been sent to ${email}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
                // this.resetForm()
            } else if (response.data.msg === 'fail') {
                console.log("Message failed to send.")
            }
        })
    }

    return (
       <Fragment>
            <button type='submit' onClick={handleEmailButtonClick}> send </button>
        </Fragment>
    )}

const mapStateToProps = state => ({
    products: state.products,
    email: state.email
})

export default connect(mapStateToProps, null)(SendingEmail)