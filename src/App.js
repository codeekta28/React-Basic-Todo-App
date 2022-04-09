import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import TodoListContainer from "./Components/TodoListContainer";

export class App extends Component {
  render() {
    return <div className="App">To do List Project
    <TodoListContainer/>
    </div>;
  }
}

export default App;
