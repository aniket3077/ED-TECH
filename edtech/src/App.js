import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Reset from "./reset";
import Dashboard from "./dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyAJGb0ZZV9KPkgozv7g1FIgMiE2lCTbb9A",
  authDomain: "ed-tech-30230.firebaseapp.com",
  projectId: "ed-tech-30230",
  storageBucket: "ed-tech-30230.appspot.com",
  messagingSenderId: "978185604358",
  appId: "1:978185604358:web:73bf80223ae74fe67ce287",
  measurementId: "G-8SFGLJH5LX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);