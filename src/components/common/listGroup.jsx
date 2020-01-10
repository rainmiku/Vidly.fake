import React, { Component } from "react";
class ListGroup extends Component {
  render() {
    const {
      items,
      textProperty,
      onItemSelect,
      valueProperty,
      selectedItem
    } = this.props;
    return (
      <ul className="list-group">
        {items.map(item => (
          <li
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            style={{ cursor: "pointer" }}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
