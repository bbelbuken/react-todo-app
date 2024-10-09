import React from "react";
import ListItem from "./ListItem";

const List = ({ listItem, deleteItem, handleCheck }) => {
  return (
    <div>
      <ul>
        {listItem.map((item) => (
          <ListItem 
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
