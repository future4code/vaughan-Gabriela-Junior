import SignUp from "../../components/SignUp/SignUp";
import useUnprotectedPage from '../../hooks/useUnprotectedPage';


const SignUpPage = ({setLoginButton}) => {
      // useUnprotectedPage();

    return (
      <div>
        SignUp Page!
        <SignUp setLoginButton={setLoginButton}/>
      </div>
    );
  }
  
  export default SignUpPage;
  