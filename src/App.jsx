import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Mainheader from "./components/main-header/Mainheader";
import "./App.css";

import PostListings from "./components/post-listing/PostListings";

function App() {
  const [count, setCount] = useState(0);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function modalVisibilityHandler(){
      if(modalIsVisible)
        setModalIsVisible(false);
      else
        setModalIsVisible(true);
  }

  return (
    <>
    <Mainheader onCreatePost  = {modalVisibilityHandler} />
    <div> 
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <main>
      <PostListings isModalAvailable = {modalIsVisible} onClose = {modalVisibilityHandler} />
      </main>
    </>
  );
}

export default App;
