import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h2>Frontend React Challenges</h2>
      <ul>
        <li>
          <Link to="/challenges/Counter">Counter</Link>
        </li>
        <li>
          <Link to="/challenges/AnagaramChecker">Anagram Checker</Link>
        </li>
        <li>
          <Link to="/challenges/ImageGallery">Image Gallery</Link>
        </li>
        <li>
          <Link to="/challenges/Accordion">Accordion</Link>
        </li>
        <li>
          <Link to="challenges/BackgroundChanger">Background Changer</Link>
        </li>
        <li>
          <Link to="challenges/LightDarkMode">Light Dark Mode</Link>
        </li>
        <li>
          <Link to="challenges/NaturalSport">Natural Sport</Link>
        </li>
        <li>
          <Link to="challenges/TableColor">Table Color</Link>
        </li>
        <li>
          <Link to="challenges/GuessNumber">Guess The Number</Link>
        </li>
        <li>
          <Link to="challenges/Pagination">Pagination</Link>
        </li>
        <li>
          <Link to="challenges/Stack">Stack</Link>
        </li>
        <li>
          <Link to="challenges/WordCount">Word Count</Link>
        </li>
        <li>
          <Link to="challenges/TemperatureConverter">
            Temperature Converter
          </Link>
        </li>
        <li>
          <Link to="challenges/StarRating">Star Rating</Link>
        </li>
        <li>
          <Link to="challenges/TelephoneFormatter">Telephone Formatter</Link>
        </li>
        <li>
          <Link to="challenges/StringTransformer">String Transformer</Link>
        </li>
        <li>
          <Link to="challenges/TicTacToe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="challenges/ExpenseTracker">Expense Tracker</Link>
        </li>
        <li>
          <Link to="challenges/BMICalculator">BMI Calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
