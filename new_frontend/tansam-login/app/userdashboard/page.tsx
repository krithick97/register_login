"use client";

import "./page.css";

export default function UserDashboard() {
  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1 className="dashboard-title">
          STUDENT DASHBOARD
        </h1>

        <h2 className="welcome-text">
          Welcome 
        </h2>

        <div className="stats-container">

          <div className="stat-card">
            <h3>Upcoming Events</h3>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h3>Registered Events</h3>
            <p>2</p>
          </div>

        </div>

        <h2 className="section-title">
          Available Events
        </h2>

        <div className="event-card">
          <span>Hackathon</span>
          <button className="join-btn">
            Join
          </button>
        </div>

        <div className="event-card">
          <span>Paper Presentation</span>
          <button className="join-btn">
            Join
          </button>
        </div>

        <div className="event-card">
          <span>Coding Contest</span>
          <button className="join-btn">
            Join
          </button>
        </div>

        <div className="action-buttons">

          <button className="dashboard-btn">
            My Registrations
          </button>

          <button className="logout-btn">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}