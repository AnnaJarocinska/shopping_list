import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Start from './app/views/Start';
import MakingList from './app/views/MakingList';
import AddingRecipent from './app/views/AddingRecipent';
import SendingList from './app/views/SendingList';
import Navigation from './app/components/Navigation';

toast.configure()

  function App() {
    return (
      <div className="App">
        <Router>
            <Navigation/>
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
      </div>
    );
  }

export default App;
