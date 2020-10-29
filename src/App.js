import logo from "./logo.svg";
import "./App.css";
import SearchResult from "./components/SearchResult";
import { APPLICATION_TITLE, SEARCH_BTN_TEXT } from "./constants";

function App() {
  return (
    <div className="App">
      <h1>{APPLICATION_TITLE}</h1>
      <input type="text" id="searchBox" />
      <button id="searchBtn">{SEARCH_BTN_TEXT}</button>
      <SearchResult />
    </div>
  );
}

export default App;
