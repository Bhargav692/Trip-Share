import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to TripShare 🚀</h1>
        <p className="home-description">
          Discover and share amazing trip experiences. Start your journey today!
        </p>
        <button className="home-button">Explore Experiences</button>
      </div>
    </div>
  );
}

export default Home;
