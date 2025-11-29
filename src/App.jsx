import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./challenges/Counter/Counter";
import AnagramChecker from "./challenges/AnagaramChecker/AnagramChecker";

function App() {
  return (
    <div className="app-route">
      <header>
        <Link to="/">
          <h1>FrontEnd Mini Challenges</h1>
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
