import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"
           element={<>
           <Header />
            <Home />
            </>}>
          </Route>

          <Route path="/Checkout" element={<>
           <Header />
           <Checkout />
            </>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
