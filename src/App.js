import logo from "./logo.svg";
import "./components/css/App.css";
import Header from "./components/Header";
import Social from "./components/Social";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Social />
      {/* <Main />
      <Footer /> */}
    </div>
  );
}
