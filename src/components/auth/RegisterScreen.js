import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator  from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msg } = useSelector( state => state.ui);

  console.log(msg);

  const [values, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2 } = values;


  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValid()){
      dispatch( startRegisterWithEmailPasswordName(email, password, name) );
    }
  }


  const isFormValid = () => {

    if( name.trim().length === 0) {

      dispatch(setError('Name is required'));
      return false;

    } else if ( !validator.isEmail( email )) {

      dispatch(setError('email invalid'));
      return false;
      
    } else if ( password !== password2 || password.length < 5){
      
      dispatch(setError('Password should be at least 6 charaters and math each other'));
      return false;
      
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div>
      <h3 className='auth__title'>Register</h3>
      <form
        onSubmit={handleRegister}
        className='animate__animated animate__fadeIn animate__faster'
      >
        { msg && 
          (<div className='auth__alert-error'>
            {msg}
            </div>)
        }
        <input
            type='text'
            className='auth__input'
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleInputChange}
            autoComplete='off'
          />
        <input
          type='text'
          className='auth__input'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
          autoComplete='off'
        />
        <input
          type='password'
          className='auth__input'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='auth__input'
          placeholder='Confirm password'
          name='password2'
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type='submit'
          className='btn btn-primary btn-block mb-5'
        >
          Login
        </button>

        <Link 
          to='/auth/login'
          className='link'
        >
          Already registered?
        </Link>

      </form>
    </div>
  )
}
