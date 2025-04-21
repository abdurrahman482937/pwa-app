import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Link to="/"><Navbar.Brand>Logo</Navbar.Brand></Link>
            <Nav className="me-auto">
              <Link to="/"><Nav.Link>Home</Nav.Link></Link>
              <Link to="/about"><Nav.Link>About</Nav.Link></Link>
              <Link to="/users"><Nav.Link>Users</Nav.Link></Link>
            </Nav>
          </Container>
        </Navbar>
        <Route Component={About} path="/about" ></Route>
        <Route Component={Users} path="/users" ></Route>
        <Route Component={Home} path="/" ></Route>
      </Router>
    </div>
  );
}

export default App;
