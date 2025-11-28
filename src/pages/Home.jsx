import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h2>FrontEnd React Challenges</h2>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
