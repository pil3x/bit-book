import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../app/components/Header/Header.js';
import Main from '../app/components/Main/Main.js';
import Footer from '../app/components/Footer/Footer.js';
import UserItem from '../app/pages/People/People.js';
import Feed from '../app/pages/Feed/Feed.js';
import PostSingle from './posts/PostSingle/PostSingle.js';

import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage.js';

function App() {
  return (
    <>
      {/* <Header />
      <Main>
        <Switch>
          <Route path="/posts/:id" component={PostSingle} />
          <Route path="/people" component={UserItem} />
          <Route path="/posts" component={Feed} />
          <Redirect to='/posts' />
        </Switch>
      </Main>
      <Footer /> */}

      <RegisterPage />
    </>
  );
}

export default App;
