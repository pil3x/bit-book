import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../app/components/Header/Header';
import Main from '../app/components/Main/Main';
import Footer from '../app/components/Footer/Footer';
import UserItem from '../app/pages/People/People';
import Feed from '../app/pages/Feed/Feed';
import PostSingle from './posts/PostSingle/PostSingle';
import { isLoggedIn } from '../services/loginServices';
import './App.css';
import RegisterLogInPage from './pages/RegisterPage/RegisterLogInPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: isLoggedIn(),
    }
  }


  render() {

    if (this.state.isLoggedIn) {
      return (
        <>
          < Header />
          <Main>
            <Switch>
              <Route path="/posts/:id" component={PostSingle} />
              <Route path="/people" component={UserItem} />
              <Route path="/posts" component={Feed} />
              <Redirect to='/posts' />
            </Switch>
          </Main>
          <Footer />
        </>
      )
    }

    return (
      <Switch>
        <Route path="/(register|login)" component={RegisterLogInPage} />
        <Redirect to="/register" />
      </Switch>
    )

  }

}

export default App;
