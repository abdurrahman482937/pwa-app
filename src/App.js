import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand><Link to="/">Logo</Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Route path="/about" Component={About}></Route>
        <Route path="/users" Component={Users}></Route>
        <Route exact path="/" Component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
