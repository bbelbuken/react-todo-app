import React from "react";
import ListItem from "./ListItem";

const List = ({ listItem, deleteItem }) => {
  return (
    <div>
      <ul>
        {listItem.map((item) => (
          <ListItem 
            key={item.id}
            id={item.id}
            item={item.item}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
