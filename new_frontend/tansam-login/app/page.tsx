"use client";

import { useRouter } from "next/navigation";
import "./pagestyle.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home-container">

      <div className="home-card">

        <h1 className="home-title">
          College Event Management System
        </h1>

        <p className="home-subtitle">
          Register and participate in exciting
          technical and non-technical events.
        </p>

        <div className="features">

          <div className="feature-card">
            🎯 Hackathons
          </div>

          <div className="feature-card">
            📝 Paper Presentations
          </div>

          <div className="feature-card">
            💻 Coding Contests
          </div>

          <div className="feature-card">
            🏆 Quiz Competitions
          </div>

        </div>

        <button
          className="home-btn"
          onClick={() =>
            router.push("/register_folder")
          }
        >
          Student Registration
        </button>

        <button
          className="home-btn"
          onClick={() =>
            router.push("/login_folder")
          }
        >
          Student Login
        </button>
<section>
         <div className="footer-section">

          <h3>About This System</h3>

          <p>
            The College Event Management System
            helps students register and participate
            in various technical and non-technical
            events conducted by the college.
          </p>

          <h3>Contact Us</h3>

          <p>
            📧 Srm@gmail.com
            <br />
            📞 +91 9344946120
            <br />
            🏫SRM College Campus
          </p>

          <h3>Developed By</h3>

          <p>
            Krithick S
            <br />
            Department of Computer Science
          </p>

        </div>
</section>
 

      </div>

    </div>
  );
}