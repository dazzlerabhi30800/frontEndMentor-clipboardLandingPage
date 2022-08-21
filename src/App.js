import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Feature from "./Components/Features";
import Clipboard from "./Components/Clipboard";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Feature />
        <Clipboard />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
