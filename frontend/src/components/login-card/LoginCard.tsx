import React from 'react';
import Button from '../../components/button/Button';
import './LoginCard.scoped.css'

interface LoginCardProps {
  onSignIn: () => Promise<void>;
  onSignUp: () => Promise<void>;
  onPasswordReset: () => Promise<void>;
}

const LoginCard: React.FC<LoginCardProps> = ({ onSignIn, onSignUp, onPasswordReset }) => {
  return (
    <div className='login-card'>
      <h1 className='heading'>Nice to see you again!</h1>
      <div className='login-form'>
      <div className='login-input'>
        <div className='email-input'>
            <img alt='email' src='' className='email-icon'/>
            <input type='text' className='email-text' placeholder='Enter your email'></input>
        </div>
        <div className='password-input'>
            <img alt='password' src='' className='password-icon'/>
            <input type='password' className='password-text' placeholder='Enter your password'></input>
        </div>
        </div>
        <div className='login-buttons'>
          <Button text="Sign In" backgroundColor="#007bff" foregroundColor="#fff" onClick={onSignIn} />
          <Button text="Sign Up" backgroundColor="none" foregroundColor="#fff" onClick={onSignUp} />
          <Button text="Forgot your password?" backgroundColor="none" foregroundColor="#9A9A9A" onClick={onPasswordReset} />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
