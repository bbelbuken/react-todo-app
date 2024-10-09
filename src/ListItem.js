import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const ListItem = ({ item, id, deleteItem }) => {
  return (
    <li>
      <RiCheckboxBlankCircleLine className="checkbox"/>
      {item}
      <MdOutlineDeleteSweep className="delete-box" onClick={() => deleteItem(id)} />
    </li>
  )
};

export default ListItem;
