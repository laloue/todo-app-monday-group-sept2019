import React from "react";

export class ItemCount extends React.Component {
  render() {
    return (
      <p>
        You have <strong>{this.props.count}</strong> incompleted tasks.
      </p>
    );
  }
}

export default ItemCount;
