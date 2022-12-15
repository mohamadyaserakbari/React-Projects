import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Container, Navbar,
} from 'reactstrap';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    } else {
      counters[index].value = 0;
    }
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handelReset = () => {
    const counters = this.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <div style={{ float: "right" }}>
            <Counters>
              counters = {this.state.counters}
              onIncrement = {this.handleIncrement}
              onDecrease = {this.handleDecrease}
              onDelete = {this.handleDelete}
            </Counters>
            <Button color='success' className='btn-sm m-2'>تنظیم مجدد</Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
export default App;
