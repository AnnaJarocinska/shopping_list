import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StartAnimation from '../components/StartAnimation';
import Button from '../components/Button.css';
import FlexContainer from '../components/FlexContainer';
import H1 from '../components/H1';

const Start = () => {
    const { t } = useTranslation();
    return (
        <FlexContainer>
            <H1>{t('appName.label')}</H1>
            <StartAnimation/>
            <Link to="/making_list">
                <Button>Start</Button>
            </Link>
        </FlexContainer>
    );
}

export default Start;