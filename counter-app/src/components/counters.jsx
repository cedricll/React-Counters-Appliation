import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onDelete,
      onIncrement,
      onReset,
      counters,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btm-primary btn-sm m-2">
          Reset
        </button>
        <br></br>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement}
          >
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
