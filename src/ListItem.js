import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

const ListItem = ({ item, deleteItem, handleCheck }) => {
  return (
    <li>
      {item.checked ? (
        <RiCheckboxCircleFill
          className="checkbox"
          onClick={() => handleCheck(item.id)}
        />
      ) : (
        <RiCheckboxBlankCircleLine
          className="checkbox"
          onClick={() => handleCheck(item.id)}
        />
      )}
      {item.item}
      <MdOutlineDeleteSweep
        className="delete-box"
        onClick={() => deleteItem(item.id)}
      />
    </li>
  );
};

export default ListItem;
