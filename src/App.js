import React from "react";
import uuid from "uuid/v4";
import {AddItem} from "./AddItem";
import {ItemCount} from "./ItemCount";
import {Item} from "./Item";
import {Header} from "./Header"
import  "./App.css";

const divStyle={
background: 'pink',
}

class App extends React.Component {

  state = {
    tasks: [
      { text: "Do homework", completed: true, date: "2019-10-20", id: uuid() },
      { text: "Attend meeting", completed: false, date: "2019-10-21", id: uuid() },
      { text: "Creating a React app", completed: false, date: "2019-10-16", id: uuid() },
      { text: "Send cards", completed: true, date: "2019-10-10", id: uuid() },
      { text: "Iron clothes", completed: true, date: "2019-10-31", id: uuid() },
     
    ]
  }


  addTask = (taskText) => {
    const newTask = {
      text: taskText,
      completed: false,
      date: "2019-10-21",
      id: uuid()
    };

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
      <div className="container" style={divStyle}>
        <Header/>
       
        <h3>New Task</h3>
        <div className="row">
          <div className="col-12 col-lg-8">
            <AddItem addTaskFunc={this.addTask} />
          </div>
          <div className="col-12 col-lg-8">
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
