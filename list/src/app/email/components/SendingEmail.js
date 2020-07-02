import React, {useState }  from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import Button from '../../styles/Button';
import Blur from '../../styles/Blur';
import Notification from '../../styles/Notification';

const SendingEmail = (props) => {
    let [blurEffect, setBlurEffect] = useState(false);

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
                
                setBlurEffect(
                    blurEffect = !blurEffect);

            } else if (response.data.msg === 'fail') {
                console.log("Message failed to send.")
            }})
        }
    const blurOff = () => {
        setBlurEffect(
            blurEffect = !blurEffect);
    }
        
    return (
        <div>
            {blurEffect &&
            <Blur>
                <Notification>
                    <p>Shopping list has been sent to <span>{props.email.email}</span></p>
                    <Link to="/"> <Button link>Make new list </Button></Link>
                    <Button link onClick = {blurOff}>Back to list</Button>
                </Notification>
            </Blur>
            }
            <Button big type='submit' onClick={handleEmailButtonClick}>{t('send.label')}</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    email: state.email
})

export default connect(mapStateToProps, null)(SendingEmail)