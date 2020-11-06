import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import UploadImages from './components/UploadImages'
import UploadVideos from './components/UploadVideos'
import Outputs from './components/Outputs'
import ChangePassword from './components/login/ChangePassword'
import LoginPage from './components/login/LoginPage';
import CrackDetected from './components/CrackDetected';
import ForgotPassword from './components/login/ForgotPassword';

function App() {
  return (
    <div >
    <Router>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/uploadimages' component={UploadImages} />
    <Route path='/uploadvideos' component={UploadVideos} />
    <Route path='/outputs' component={Outputs} />
    <Route path='/changepassword' component={ChangePassword} />
    <Route path='/crackdetect' component={CrackDetected} />
    </Switch>
    <Route path='/login' component={LoginPage} />
    <Route path='/forgotpassword' component={ForgotPassword} />
</Router>
   
    </div>
  );
}

export default App;
