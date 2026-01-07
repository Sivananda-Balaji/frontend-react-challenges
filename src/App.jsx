import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./challenges/Counter/Counter";
import AnagramChecker from "./challenges/AnagaramChecker/AnagramChecker";
import ImageGallery from "./challenges/ImageGallery/ImageGallery";
import Accordion from "./challenges/Accordion/Accordion";
import BackgroundChanger from "./challenges/BackgroundChanger/BackgroundChanger";
import LightDarkMode from "./challenges/LightDarkMode/LightDarkMode";
import NaturalSport from "./challenges/NaturalSport/NaturalSport";
import TableColor from "./challenges/TableColor/TableColor";
import GuessNumber from "./challenges/GuessNumber/Guessnumber";
import Pagination from "./challenges/Pagination/Pagination";
import Stack from "./challenges/StackImplementation/Stack";
import WordCount from "./challenges/WordCount/WordCount";
import Temperature from "./challenges/TemperatureConverter/Temperature";
import StarRating from "./challenges/StarRating/StarRating";
import TelephoneFormatter from "./challenges/TelephoneFormatter/TelephoneFormatter";
import StringTransformers from "./challenges/StringTransformers/StringTransformers";
import TicTacToe from "./challenges/TicTacToe/TicTacToe";
import ExpenseTracker from "./challenges/ExpenseTracker/ExpenseTracker";
import BMICalculator from "./challenges/BMICalculator/BMICalculator";
import StepperContainer from "./challenges/Stepper/StepperContainer";
import InlineOption from "./challenges/InlineOption/InlineOption";
import TabContainer from "./challenges/Tab/TabContainer";

function App() {
  return (
    <div className="app-route">
      <header>
        <Link to="/">
          <h1>Frontend Mini Challenges</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges/Counter" element={<Counter />} />
          <Route
            path="/challenges/AnagaramChecker"
            element={<AnagramChecker />}
          />
          <Route path="/challenges/ImageGallery" element={<ImageGallery />} />
          <Route path="/challenges/Accordion" element={<Accordion />} />
          <Route
            path="challenges/BackgroundChanger"
            element={<BackgroundChanger />}
          />
          <Route path="challenges/LightDarkMode" element={<LightDarkMode />} />
          <Route path="challenges/NaturalSport" element={<NaturalSport />} />
          <Route path="challenges/TableColor" element={<TableColor />} />
          <Route path="challenges/GuessNumber" element={<GuessNumber />} />
          <Route path="challenges/Pagination" element={<Pagination />} />
          <Route path="challenges/Stack" element={<Stack />} />
          <Route path="challenges/WordCount" element={<WordCount />} />
          <Route
            path="challenges/TemperatureConverter"
            element={<Temperature />}
          />
          <Route path="challenges/StarRating" element={<StarRating />} />
          <Route
            path="challenges/TelephoneFormatter"
            element={<TelephoneFormatter />}
          />
          <Route
            path="challenges/StringTransformer"
            element={<StringTransformers />}
          />
          <Route path="challenges/TicTacToe" element={<TicTacToe />} />
          <Route
            path="challenges/ExpenseTracker"
            element={<ExpenseTracker />}
          />
          <Route path="challenges/BMICalculator" element={<BMICalculator />} />
          <Route path="challenges/Stepper" element={<StepperContainer />} />
          <Route path="challenges/Inline" element={<InlineOption />} />
          <Route path="challenges/Tab" element={<TabContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
