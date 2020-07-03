import React, {useState }  from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
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
                listName: `${t('appName.label')}`.toUpperCase(),
                fruits: `${t('fruit.label')}: ${fruits}`,
                vegetables: `${t('vegetable.label')}: ${vegetables}`,
                dairy: `${t('dairy.label')}: ${dairy}`,
                meatAndFish: `${t('meatAndFish.label')}: ${meatAndFish}`,
                dryGoods: `${t('dryGoods.label')}: ${dryGoods}`,
                householdItems: `${t('householdItems.label')}: ${householdItems}`,
                others: `${t('others.label')}: ${others}`,
                email: email,
                message: `${t('message.label')}: ${message}`}

        }).then((response, ) => {
            if (response.data.msg === 'success') {
                setBlurEffect(
                    blurEffect = !blurEffect);

            } else if (response.data.msg === 'fail') {
                toast.warning(`${t('fail')}`, {
                    position: toast.POSITION.TOP_CENTER
            })}})
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
                    <p>{t('sent')} <span>{props.email.email}</span></p>
                    <Link to="/"> <Button link>{t('new')}</Button></Link>
                    <Button link onClick = {blurOff}>{t('back')}</Button>
                </Notification>
            </Blur>
            }
            <Button big type='submit' onClick={handleEmailButtonClick}>{t('send')}</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    email: state.email
})

export default connect(mapStateToProps, null)(SendingEmail)