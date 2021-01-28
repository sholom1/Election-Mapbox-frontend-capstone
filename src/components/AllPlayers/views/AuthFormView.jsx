import React from "react";
import './styles/AuthFormView.css'
import {withRouter} from 'react-router-dom';

const AuthFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail } = props;

  return (
    <div className='authContainer'>
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""}
      <form onSubmit={handleSubmit} name={name}>
      <div className='innerContainer'>

        <div className='inputDiv'>
          <label htmlFor="email">
            <small>Email: </small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div className='inputDiv'>
          <label htmlFor="password">
            <small>Password: </small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div className='buttonDiv'>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div className='errorMessage'> {error.response.data} </div>}
        </div>
      </form>
    </div>
  );
};

export default withRouter(AuthFormView);