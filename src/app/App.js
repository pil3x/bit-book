import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../app/components/Header/Header.js';
import Main from '../app/components/Main/Main.js';
import Footer from '../app/components/Footer/Footer.js';
import Home from '../app/pages/Home/Home.js';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
