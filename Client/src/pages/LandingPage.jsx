import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/svg/main.svg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Wrapper>
      <div className="container page">
        <div className="info">
          <h1>
            Member<span>ship Lists Manage</span>ment
          </h1>
          <p>
            Membership Lists Management refers to the process of organizing,
            maintaining, and overseeing a list of members within an
            organization, group, or community. This list typically includes
            individuals who have joined or subscribed to the entity, such as
            members of a club, association, or online platform.
          </p>
          <Link to="/Register" className="btn register-link">
            Regigter
          </Link>
          <Link to="/Login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
