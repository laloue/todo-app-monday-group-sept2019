import React from "react";
import uuid from "uuid/v4";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  // define state at top of parent or top level component
  // always an object
  // not const state just state this is ES7 - new way of saying constructor
  state = {
    tasks: [
      { text: "walk the cat", completed: true, date: "2019-10-20", id: uuid() },
      { text: "buy oats", completed: false, date: "2019-10-21", id: uuid() },
      { text: "learn React", completed: false, date: "2019-10-16", id: uuid() },
      { text: "wash slippers", completed: true, date: "2019-10-10", id: uuid() },
      { text: "de-flea the cat", completed: true, date: "2019-10-31", id: uuid() },
      { text: "shop", completed: true, date: "2019-10-16", id: uuid() }
    ]
  }
  // write method on app has to live where state lives
  // function to update the tasks with a new task
  // use arrow notation - ensure 'this' is correct, also good practice because we are using recent js

  addTask = (taskText) => {
    // create new task with default completed and date props
    // add task to state
    //  console.log(taskText);
    const newTask = {
      text: taskText,
      completed: false,
      date: "2019-10-21",
      id: uuid()
    };
    // always use setState to update state
    // take a copy
    // never do this.state.tasks.push(item)
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    })
  }

  deleteTask = (taskId) => {
    const existingTasks = this.state.tasks;
    const filteredTasks = existingTasks.filter((item) => {
      return item.id !== taskId;
    });
    this.setState({ tasks: filteredTasks })
  }

  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List </h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem addTaskFunc={this.addTask} />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item => {
                return <Item key={item.id}
                  taskId={item.id}
                  text={item.text}
                  completed={item.completed}
                  date={item.date}
                  deleteTaskFunc={this.deleteTask} />
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
