import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
