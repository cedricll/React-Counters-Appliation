// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index].value !== 0) {
      counters[index].value--;
    }
    this.setState({counters})
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="containers">
        <Counters onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
                  counters={this.state.counters}
                  onDecrement={this.handleDecrement}
        />
      </main>
    </React.Fragment>
    
  );
  }
}

export default App;

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>