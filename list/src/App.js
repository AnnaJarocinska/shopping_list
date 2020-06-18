import React, {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components'
import Start from './app/views/Start';
import MakingList from './app/views/MakingList';
import AddingRecipent from './app/views/AddingRecipent';
import SendingList from './app/views/SendingList';
import Navigation from './app/components/Navigation';
import LanguageSelector from './app/components/translation/LanguageSelector';
import theme from '../src/app/utils/theme';
import GlobalStyle from './index.css';

toast.configure()

  function App() {
    return (
      <Suspense fallback={null}>
        <ThemeProvider theme = {theme}>
          <GlobalStyle/>
            <Router>
                {/* <Navigation/> */}
                <LanguageSelector/>
                <Switch>
                  <Route path="/making_list">
                    <MakingList />
                  </Route>
                  <Route path="/adding_recipent">
                    <AddingRecipent />
                  </Route>
                  <Route path="/sending_list">
                    <SendingList />
                  </Route>
                  <Route path="/">
                    <Start />
                  </Route>
                </Switch>
            </Router>
      </ThemeProvider>
      </Suspense>
    );
  }

export default App;
