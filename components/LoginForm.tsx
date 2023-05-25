import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Email or Phone"
        id="username"
        onChange={(e)=>{setUsername(e.target.value)}}
        value={username}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password}
      />

      <button>Log In</button>
      <div className="social">
        <div className="go">
          <i className="fab fa-google"></i> Google
        </div>
        <div className="fb">
          <i className="fab fa-facebook"></i> Facebook
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
