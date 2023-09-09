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
          <Button text="Sign In" backgroundColor="#007bff" foregroundColor="#fff" onClick={onSignIn} style={{ width: '449px', height: '64px', borderRadius: '64px', padding: '17px 32px 17px 32px', fontWeight: '600', fontSize: '20px', lineHeight: '31px' }}/>
          <Button text="Sign Up" backgroundColor="none" foregroundColor="#fff" onClick={onSignUp} style={{ width: '449px', height: '64px', borderRadius: '64px', padding: '17px 32px 17px 32px', fontWeight: '600', fontSize: '20px', lineHeight: '31px'  }}/>
          <Button text="Forgot your password?" backgroundColor="none" foregroundColor="#9A9A9A" onClick={onPasswordReset} style={{width: '187px', height: '20px', fontWeight: '500', fontSize: '16px', lineHeight: '19.5px'}}/>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
