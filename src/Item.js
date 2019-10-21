import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <span className={this.props.completed ? "completedItem mySpan" : "mySpan"}>
              {/* first way of doing conditional logic ternary op above */}
              {this.props.text}
            </span>
          </div>
          <div className="col-2">
            {/* <button className="btn btn-info">Delete</button> */}
            <i className="fas fa-trash"> </i>
          </div>
          <div className="col-2">
            {/* {this.props.completed===false && <button className="btn btn-light">Done</button>} */}
            {/* if lhs is true then do right hand side of && bit of a trick  */}
            {/* if this then that */}
            {/* {this.props.completed===true && <button className="btn btn-light">Uncheck</button>} */}
            {/* two poss situations then ternary */}
{/* 
            {this.props.completed ?
              <button className="btn btn-light">Uncheck</button> :
              <button className="btn btn-light">Done</button>} */}
              {this.props.completed ?
                <i className="fas fa-undo"></i>:
                <i className="fas fa-check greenCheck"></i>}

            {/* https://fontawesome.com/ use cdn version */}

          </div>
        </div>
      </li>
    );
  }
}

export default Item;
