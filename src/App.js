import React from "react";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  state={
    tasks:[
      {text:"walk the cat", completed:true, date:"2019-10-20"},
      {text:"buy oats", completed:false, date:"2019-10-21"},
      {text:"learn React", completed:false, date:"2019-10-16"},
      {text:"wash slippers", completed:true, date:"2019-10-10"},
      {text:"de-flea the cat", completed:true, date:"2019-10-31"},
      {text:"shop", completed:true, date:"2019-10-16"}
    ]
  }
  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List </h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item => {
                 return <Item text={item.text} completed={item.completed} date={item.date}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
