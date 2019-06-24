import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../app/components/Header/Header.js';
import Main from '../app/components/Main/Main.js';
import Footer from '../app/components/Footer/Footer.js';
import Feed from '../app/pages/Feed/Feed.js';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/posts" component={Feed} />
          <Redirect to='/posts' />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
