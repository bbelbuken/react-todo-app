import React from "react";
import ListItem from "./ListItem";

const List = ({ listItem }) => {
  return (
    <div>
      <ul>
        {listItem.map((item) => (
          <ListItem 
            key={item.id}
            item={item.item}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
