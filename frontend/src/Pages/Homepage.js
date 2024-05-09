import React from "react";
import { Link, useLocation } from "react-router-dom";
import MetaData from "../components/layouts/MetaData/Metadata"
import "./Homepage.css";
function HomePage() {
  const location = useLocation();

  return (
    <>
      <MetaData title="ChatMind | Home" />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#">
            <div className="navbar-logo">ChatMind</div>
          </Link>
          <div className="navbar-menu">
            <div className="navbar-item">
              {location.pathname === "/login"
                ? "Ready to ChatMind? Let's Login"
                : "Join the ChatMind community !"}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomePage;
