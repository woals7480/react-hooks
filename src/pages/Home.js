import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈 화면입니다.</h1>
      <ul>
        <li>
          <Link to="/reactHooks">ReactHooks</Link>
        </li>
        <li>
          <Link to="/customHooks">CustomHooks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
