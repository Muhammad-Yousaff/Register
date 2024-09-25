import React, { useState } from 'react';
import './LoginSingUp.css';


const LoginSingUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
   const[action, setactoin] =useState("singup")
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  
  
  
  
  };


  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='text'>Register</div>
          <div className='underline'> ------- -------- ------</div>

          <div className='input'>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleChange(setName)}
            />
          </div>

          <div className='input'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleChange(setEmail)}
            />
          </div>

          <div className='input'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={handleChange(setPassword)}
            />
          </div>

          <div className='input'>
            <input
              type='password'
              placeholder='Repeat Password'
              value={repeatPassword}
              onChange={handleChange(setRepeatPassword)}
            />
          </div>
        </div>
      </div>
      <div className='button'>
        <div className='forget-password'>
          Forget password?<button><span>Click here</span></button>
        </div>
        <div className='submit-container'>
          <div className='submit'>Register</div>
          <div className='submit'>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSingUp;
