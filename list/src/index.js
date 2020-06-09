import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import './i18n';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
    <Provider store={store}>
         <I18nextProvider i18n={i18next}>
        <App />
        </I18nextProvider>,
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
