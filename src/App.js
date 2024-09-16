import './styles/App.css';
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div>Content </div>
      <Footer />
    </div>
  );
}

export default App;
