import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="app">
      {/** Header */}
      <Header />

      {/** App Body */}
      <div className="app_body">
        {/** Side Bar */}
        <Sidebar />
        {/** Feed */}
        <Feed />
        {/** Header */}
      </div>
    </div>
  );
}

export default App;
