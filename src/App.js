import React from "react";

import Post from "./components/Post";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="app__headerImage"
          alt="logo"
        />
      </div>

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
