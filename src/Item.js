import React from "react";
import "./Item.css";

export class Item extends React.Component {

  trashClicked= () =>{
    this.props.deleteTaskFunc(this.props.taskId);
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span className={this.props.completed ? "completedItem mySpan" : "mySpan"}>
                   {this.props.text}
            </span>
          </div>
          <div className="col-2">
         
            <i className="fas fa-trash" onClick={this.trashClicked}> </i>
          </div>
          <div className="col-2">

              {this.props.completed ?
                <i className="fas fa-undo"></i>:
                <i className="fas fa-check greenCheck"></i>}

                      </div>
        </div>
      </li>
    );
  }
}

export default Item;
