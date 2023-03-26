import "../assets/css/calendar.css";
import Social from "./SocialMedia";
import { logout } from "../services/firebase";
import Calendar from "./Calendar";
import React, { useState } from "react";
import Sidebar from "./Utils";

const subjects = [
  { name: "UX/UI", style: { color: "#0084FF", backgroundColor: "#E6F3FF" } },
  { name: "Operating Systems", style: { color: "#FF00F5", backgroundColor: "#FFCDFD" } },
  { name: "DevOps", style: { color: "#E92C2C", backgroundColor: "#FFEBEB" } },
  { name: "MobileApps", style: { color: "#FF9F2D", backgroundColor: "#FFF5E8" } },
  { name: "Networking", style: { color: "#a1a30d", backgroundColor: "#FDFFAB" } },
  { name: "OOP", style: { color: "#00BA34", backgroundColor: "#E6F8EB" } },
  { name: "Notes", style: { color: "#848383", backgroundColor: "#E8E8E8" } },
];

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={require("../assets/img/logo_calendar.png")} alt=""></img>
      </div>
      <button onClick={logout}>Logout</button>
      <div className="profile_icon">
        <img src={require("../assets/img/logo_calendar.png")} alt="profile icon"></img>
      </div>
    </header>
  );
}

function Main() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  const [dayOfWeek, monthAndDay, year] = formattedDate.split(', ');
  const [currentEvents, setCurrentEvents] = useState([]);

  return (
    <main>
      <section>
        <div className="left-side">
          <div className="column-today-date">
            <h1>{formattedDate}</h1>
          </div>
          <div className="column-events">
            <div className="events-title">
              <h1>Events</h1>
            </div>
            <Sidebar events={currentEvents} />
          </div>
          <div className="notes-title">
            <h1>Notes</h1>
          </div>
          <div className="column-notes">
            <ul>
              <li>
                <h5>Don't forget to talk with your classmates</h5>
              </li>
              <li>
                <h5>After class happy hour on 4/20</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="center">
          <div className="button-bar-mid"></div>
          <div className="calendar-mid">
            <Calendar onEventsChange={setCurrentEvents} getEvents={currentEvents} />
          </div>
        </div>
        <div className="right-side">
          <div className="module-title">
            <h1>Modules</h1>
          </div>
          <div className="column-module">
            <ul>
              {subjects.map((subject) => (
                <React.Fragment key={subject.name}>
                  <li style={subject.style}>{subject.name}</li>
                  <br />
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="deadline-title">
            <h1>Deadline</h1>
          </div>
          <div id="DeadlineList" className="column-deadline">
            <ul>
              <li style={{ color: '#0084FF', backgroundColor: '#E6F3FF' }}>3 Days Left</li>
              <br />
              <li style={{ color: '#FF00F5', backgroundColor: '#FFCDFD' }}>5 Days Left</li>
              <br />
              <li style={{ color: '#E92C2C', backgroundColor: '#FFEBEB' }}>1 Day Left</li>
              <br />
              <li style={{ color: '#FF9F2D', backgroundColor: '#FFF5E8' }}>6 Days Left</li>
              <br />
              <li style={{ color: '#a1a30d', backgroundColor: '#FDFFAB' }}>8 Days Left</li>
              <br />
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="column_left">
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of use</a></li>
        </ul>
      </div>
      <div className="column_mid">
        <Social />
      </div>
      <div className="column_right">
        <span>&#169;</span>
        <p>2023 Key. All Rights Reserved | Development Group</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;