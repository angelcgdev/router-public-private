import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Switch>
            <Route path='/auth/login' component={ LoginScreen } exact={true}/>
            <Route path='/auth/register' component={ RegisterScreen } exact={true}/>
        </Switch>
      </div>
    </div>
  )
}
