import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import StartAnimation from '../components/StartAnimation';
import StartAnimationPortrait from '../components/StartAnimationPortrait';
import Button from '../styles/Button';
import Container from '../styles/Container';
import Title from '../styles/Title';

const Start = () => {
    const { t } = useTranslation();
    const isNotMobilePortrait = useMediaQuery({
        query: '(min-device-width: 478px)'
      })
    return (
        <Container start>
            <Title>{t('appName.label')}</Title>
            {isNotMobilePortrait ? <StartAnimation/> : <StartAnimationPortrait/>}
            <Link to="/making_list">
                <Button big>{t('start.label')}</Button>
            </Link>
        </Container>
    );
}

export default Start;