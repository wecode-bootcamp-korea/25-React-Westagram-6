import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

/* Dongwhee */
import LoginDongWhee from './pages/dongwheeKim/Login/Login';
import MainDongWhee from './pages/dongwheeKim/Main/Main';

/* Goun */
import LoginGoUn from './pages/gounSeo/Login/Login';
import MainGoUn from './pages/gounSeo/Main/Main';

/* Hoyoung */
import LoginHoYoung from './pages/hoyoungSohn/Login/Login';
import MainHoYoung from './pages/hoyoungSohn/Main/Main';

/* Hoyoung */
import LoginSueYeon from './pages/sueyeonYoon/Login/Login';
import MainSueYeon from './pages/sueyeonYoon/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-whee" component={LoginDongWhee} />
          <Route exact path="/main-whee" component={MainDongWhee} />
          <Route exact path="/login-un" component={LoginGoUn} />
          <Route exact path="/main-un" component={MainGoUn} />
          <Route exact path="/login-young" component={LoginHoYoung} />
          <Route exact path="/main-young" component={MainHoYoung} />
          <Route exact path="/login-yeon" component={LoginSueYeon} />
          <Route exact path="/main-yeon" component={MainSueYeon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
