import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue=""></FormRow>
        <FormRow type="password" name="password" defaultValue=""></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Not a member yet?
          <Link to="/Register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
