import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Navigation from './components/Navigation';
import Home from './routes/Home';
import Login from './routes/Login';
import About from './routes/About';
import Contact from './routes/Contact';
import Mypage from './routes/Mypage';
import Room from './routes/Room';
import Signup from './routes/Signup';
import PrivateRoute from './common/PrivateRoute';
import Alerts from './components/layout/Alert';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from '../actions/auth';

import './App.css';
import './index.css';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <HashRouter>
            <Fragment>
              <Navigation />
              <Alerts />
              <Route exact={true} path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <PrivateRoute path='/mypage' component={Mypage} />
              <PrivateRoute path='/room' component={Room} />
              <Route path='/signup' component={Signup} />
            </Fragment>
          </HashRouter>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
