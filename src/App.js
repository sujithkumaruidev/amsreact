import React,{Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import LoginPage from './components/login/LoginPage';
import PrivateRouter from "./components/PrivateRouter";

import ForgotPassword from './components/login/ForgotPassword';

class App extends Component{
  render(){
  return (
    <div >
    <Router>
    <Switch>
    <Redirect exact path='/' to='/login' />
    <PrivateRouter path='/home' component={Home}/>
    <Route path='/login' component={LoginPage} />
    <Route path='/forgotpassword' component={ForgotPassword} />
    </Switch>
    
</Router>
   
    </div>
  );
}

}

export default App;
