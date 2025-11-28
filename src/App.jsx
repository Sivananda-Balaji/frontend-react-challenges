import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
