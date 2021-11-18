import React from "react";
import Crud from "../components/Crud";
import "../App.css";
import Header from "../components/Header";

const Home = () => {


  return (
    <div className="App">
      <Header />
      <div>
        <Crud />
      </div>
    </div>
  );
};

export default Home;
