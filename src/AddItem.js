import React from "react";
import "./AddItem.css";

export class AddItem extends React.Component {
  state = {
    newTaskText: ""
  }

  updateTaskText = (event) => {

    this.setState({
      newTaskText: event.target.value
    })
  }

  handleClick = () => {
    this.props.addTaskFunc(this.state.newTaskText);
    this.setState({
      newTaskText: ""
    })
  }

  mouseOverButton = () => {
    alert('Hello')
  }

  render() {

    return (
      <section>
        <input
          id="addItemInput"
          type="text"
          className="form-control"
          placeholder="add new task to list"
          value={this.state.newTaskText}
          onChange={this.updateTaskText}
        />
        <div className="mt-3 mb-3">
          <button id="addButton" className="btn" onClick={this.handleClick}>
            ADD
          </button>

        </div>
      </section>
    );
  }
}

export default AddItem;
