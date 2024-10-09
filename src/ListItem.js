import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const ListItem = ({ item }) => {
  return (
    <li>
      <RiCheckboxBlankCircleLine className="checkbox"/>
      {item}
      <MdOutlineDeleteSweep className="delete-box"/>
    </li>
  )
};

export default ListItem;
