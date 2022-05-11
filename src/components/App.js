import React from "react";
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import MyNavbar from "./MyNavbar";
import { AuthProvider } from "./../contexts/AuthContext"

function App() {
  return (
    <>
      <MyNavbar />
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}>
        <div className="w-100" style={{maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;