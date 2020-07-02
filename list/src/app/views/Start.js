import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StartAnimation from '../components/StartAnimation';
import Button from '../styles/Button';
import Container from '../styles/Container';
import Title from '../styles/Title';

const Start = () => {
    const { t } = useTranslation();
    return (
        <Container center column>
            <Title>{t('appName.label')}</Title>
            <StartAnimation/>
            <Link to="/making_list">
                <Button big>Start</Button>
            </Link>
        </Container>
    );
}

export default Start;