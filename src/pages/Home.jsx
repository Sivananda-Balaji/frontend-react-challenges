import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h2>FrontEnd React Challenges</h2>
      <ul>
        <li>
          <Link to="../challenges/Counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
