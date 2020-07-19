import React, { useState }  from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import actions from '../../products/duck/actions';
import Button from '../../styles/Button';
import Blur from '../../styles/Blur';
import Notification from '../../styles/Notification';
import Container from '../../styles/Container';

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
        const cosmetics = props.products.cosmeticsList.list;
        const babyItems = props.products.babyItemsList.list;
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
                cosmetics: `${t('cosmetics.label')}: ${cosmetics}`,
                babyItems: `${t('babyItems.label')}: ${babyItems}`,
                others: `${t('others.label')}: ${others}`,
                email: email,
                message: `${t('message.label')} ${message}`}

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

    const resetList = () => {
        props.reset();
    }
        
    return (
        <Container>
            {blurEffect &&
            <Blur>
                <Notification>
                    <p>{t('sent')} <span>{props.email.email}</span></p>
                    <Container links>
                        <Link to="/"> <Button link onClick={resetList}>{t('new')}</Button></Link>
                        <Button link onClick = {blurOff}>{t('back')}</Button>
                    </Container>
                </Notification>
            </Blur>
            }
            <Button big type='submit' onClick={handleEmailButtonClick}>{t('send')}</Button>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    email: state.email
})

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(actions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(SendingEmail)