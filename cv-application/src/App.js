import "./css/App.css";
import React from "react";
import Header from "./components/Header";
import CV from "./components/CV";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CV />
      </div>
    );
  }
}

export default App;
