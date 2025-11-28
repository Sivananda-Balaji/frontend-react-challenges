import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./challenges/Counter/Counter";

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
