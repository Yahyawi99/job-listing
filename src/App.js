// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./home/Home";
import About from "./About/About";
// CSS
import "./App.css";
// Context
import { useItGlobally } from "./useContext";

let cssVariables;
function App() {
  const { darkMode } = useItGlobally();

  if (darkMode) {
    cssVariables = {
      "--body-background": "hsl(210, 93%, 6%)",
      "--form-background": "hsl(209, 88%, 10%)",
      "--input-clr": "#fff",
      "--icon-clr": "hsl(205, 63%, 48%)",
      "--border-clr": "hsl(209, 28%, 39%)",
      "--site-btn-background": "rgb(65, 64, 64)",
      "--site-background-hover-clr": "rgb(109, 108, 108)",
      "--site-btn-clr": "#fff",
    };
  } else {
    cssVariables = {
      "--body-background": "hsl(212, 33%, 89%)",
      "--form-background": "#fff",
      "--input-clr": "#000",
      "--icon-clr": "hsl(209, 88%, 10%)",
      "--border-clr": "hsl(212, 33%, 89%)",
      "--site-btn-background": "hsl(204, 60%, 90%)",
      "--site-background-hover-clr": "hsl(205, 92%, 86%)",
      "--site-btn-clr": "hsl(205, 72%, 37%)",
    };
  }

  return (
    <Router>
      <article style={cssVariables} className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/job/:id" element={<About />} />
        </Routes>
      </article>
    </Router>
  );
}

export default App;
