import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tus libros se merecen una</span>
        <span className="headerTitleLg">Segunda Tinta</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner"
      />
    </div>
  );
}
export default Home;