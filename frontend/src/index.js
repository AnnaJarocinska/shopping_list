import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import './i18n';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import store from './store';


i18next.init({
    interpolation: { escapeValue: false }, 
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <App />
        </Provider>
    </I18nextProvider>
    ,document.getElementById('root'));

serviceWorker.unregister();
