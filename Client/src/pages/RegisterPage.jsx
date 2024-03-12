import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <FormRow
          type="text"
          name="first name"
          labelText="frist name"
          defaultValue=""
        ></FormRow>
        <FormRow
          type="text"
          name="last name"
          labelText="last name"
          defaultValue=""
        ></FormRow>
        <FormRow type="text" name="nation" defaultValue=""></FormRow>
        <FormRow type="text" name="email" defaultValue=""></FormRow>
        <FormRow type="passwoed" name="password" defaultValue=""></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/Login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
