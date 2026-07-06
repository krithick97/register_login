"use client";
import "./page_module.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1 className="dashboard-title">
          ADMIN DASHBOARD
        </h1>

        <div className="stats-container">

          <div className="stat-card">
            <h2>Total Students</h2>
            <p>120</p>
          </div>

          <div className="stat-card">
            <h2>Total Events</h2>
            <p>8</p>
          </div>

          <div className="stat-card">
            <h2>Registrations</h2>
            <p>240</p>
          </div>

        </div>

        <div className="button-container">

          <button className="dashboard-btn">
            Add Event
          </button>

          <button className="dashboard-btn">
            View Students
          </button>

          <button className="dashboard-btn">
            View Registrations
          </button>

        </div>

      </div>

    </div>
  );
}