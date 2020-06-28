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
import LanguageSelector from './app/components/LanguageSelector';
import theme from '../src/app/utils/theme';
import GlobalStyle from './index.css';

toast.configure()

  function App() {
    return (
      <Suspense fallback={null}>
        <ThemeProvider theme = {theme}>
          <GlobalStyle/>
            <Router>
                <LanguageSelector/>
                <Switch>
                  <Route path="/making_list">
                    <MakingList />
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
