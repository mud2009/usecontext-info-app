import React from "react";
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Control from "./Control";
import MyNavbar from "./MyNavbar";
import { AuthProvider } from "./../contexts/AuthContext"

function App() {
  return (
    <>
      <AuthProvider>
        <MyNavbar />
        <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}>
          <div className="w-100" style={{maxWidth: '400px'}}>
            <Router>
                <Routes>
                  <Route exact path="/" element={<Control/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/login" element={<LogIn/>}/>
                </Routes>
            </Router>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;