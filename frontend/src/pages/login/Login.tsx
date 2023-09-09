import './Login.scoped.css';
import LoginCard from '../../components/login-card/LoginCard';
import logo from '../../assets/logo.svg'

const Login = () => {
  const handleSignIn = async () => {
    console.log("signing in action");
  };
  const handleSignUp = async () => {
    console.log("signing up action");
  };
  const handlePasswordReset = async () => {
    console.log("password reset clicked");
  };

  return (
    <div className='wrapper'>
      <LoginCard
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onPasswordReset={handlePasswordReset}
      />
      <div className='animation-space'>
        <div className='logo-holder'>
            <img alt='logo' src={logo} className='logo'/>
            <div className='logo-text'>Taskify</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
