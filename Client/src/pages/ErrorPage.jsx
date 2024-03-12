import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/svg/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not found!</h3>
          <p>We can not seem to find the page you are looking for.</p>
          <Link to="/Dashboard">Back to home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something when wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
