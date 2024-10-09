import React from "react";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState(JSON.parse(localStorage.getItem("todolist")) || []);

  const addItem = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;    
    const newItem = { id, item };
    const addToList = [...listItem, newItem];
    setListItem(addToList);
    localStorage.setItem("todolist", JSON.stringify(addToList))
  };

  const deleteItem = (id) => {
    const filteredList = listItem.filter(item => item.id !== id)
    setListItem(filteredList)
    localStorage.setItem("todolist", JSON.stringify(filteredList))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addItem(inputValue);    
    setInputValue("");
  };

  return (
    <div className="container">
      <Header />
      <Form inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />
      <List listItem={listItem} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;