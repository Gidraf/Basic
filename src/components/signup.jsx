import React from 'react';
import '../index.css';


export const Signup = () => (
  <div className="signin_content">
    <form
      className="signup_form"
      action="index.html"
      method="post"
    >
      <fieldset>
        <legend>Signup</legend>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          defaultValue
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          required
          defaultValue
          placeholder="Password"
        />
        <br />
        <label htmlFor="confirm_password">
Confirm Password
        </label>
        <br />
        <input
          type="password"
          name="confirm_password"
          required
          defaultValue
          placeholder="Confirm Password"
        />
        <br />
      </fieldset>
      <button type="submit" name="signup">Signup</button>
      <br />
      <span>
        {' '}
Already have an account?
        <a href="signin.html">
Signin here
        </a>
      </span>
    </form>
  </div>


);
