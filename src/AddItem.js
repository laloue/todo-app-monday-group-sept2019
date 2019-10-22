import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  // initial state of our component
  // always an object
  // keep track of text typed
  // can have state of a component not just whole app
  state = {
    newTaskText: ""
  }

  updateTaskText = (event) => {
    // console.log(event.target.value);
    this.setState({
      newTaskText: event.target.value
    })
  }
  
  handleClick=() =>{
    // check not empty though
   this.props.addTaskFunc(this.state.newTaskText);
   this.setState({
     newTaskText: ""
    })
  }

  render() {
    // JSX is NOT HTML
    return (
      <section>
        <input
          id="addItemInput"
          type="text"
          className="form-control"
          placeholder="E.g. take out bins"
          value={this.state.newTaskText}
          onChange={this.updateTaskText}
        />
        <div className="mt-3 mb-3">
          <button id="addButton" className="btn" onClick={this.handleClick}>
            Add to list
          </button>
        </div>
      </section>
    );
  }
}

export default AddItem;
