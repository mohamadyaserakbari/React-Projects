import React, { Component } from 'react';
import './App.css';
import {
  Container, Navbar,
} from 'reactstrap';
import NavBar from './components/navbar';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <div style={{ float: "right" }}>
          <Counters />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
