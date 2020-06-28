import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Button from '../../styles/Button';

const SendingEmail = (props) => {
    const { t } = useTranslation();
    const handleEmailButtonClick = (e) => {
        e.preventDefault();
        const fruits = props.products.fruitList.list;
        const vegetables = props.products.vegetableList.list;
        const dairy = props.products.dairyList.list;
        const meatAndFish = props.products.meatAndFishList.list;
        const dryGoods = props.products.dryGoodsList.list;
        const householdItems = props.products.householdItemsList.list;
        const others = props.products.othersList.list;
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
                message: `MESSAGE: ${message}`}

        }).then((response, ) => {
            if (response.data.msg === 'success') {
                console.log("Message Sent.");
                toast.success(`Shopping list has been sent to ${email}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            } else if (response.data.msg === 'fail') {
                console.log("Message failed to send.")
            }})
    }

    return (
        <Fragment>
            <Button big type='submit' onClick={handleEmailButtonClick}>{t('send.label')}</Button>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    email: state.email
})

export default connect(mapStateToProps, null)(SendingEmail)