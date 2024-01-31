import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8086/api/v1/auth/authenticate', {
          name: name,
          email: email,
          password: password,
        });
        console.log(response.status);
        if (response.status === 200) {
          // Clear the form fields on successful registration
          setName('');
          setEmail('');
          setPassword('');

          // Redirect to the login page
          navigate('/?');
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  return (
    <>
      <div className='login2'>
        <form className='login_form' onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='gogo'>
            <div className='form-floating mb-3'>
              <label htmlFor='nm'>Username</label>
              <br />
              <input
                type='text' 
                className='form-control'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            </div>
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className='gogo'>
            <div className='form-floating mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='email'
                id='email'
                value={email}
                onChange={handleEmail}
              />
            </div>
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className='loginbox'>
            <div className='gogo'>
              <div className='form-floating mb-3'>
                <label htmlFor='pwd'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  id='pwd'
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              {errors.password && <span>{errors.password}</span>}
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-secondary'
            style={{
              background: 'black',
              color: 'white',
              width: 180,
              height: 50,
              margin: 40,
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Sign;
