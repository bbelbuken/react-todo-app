import React from "react";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState(JSON.parse(localStorage.getItem("todolist")) || []);

  const setAndSaveItem = (newItem) => {
    setListItem(newItem)
    localStorage.setItem("todolist", JSON.stringify(newItem))

  }

  const addItem = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;    
    const newItem = { id, checked: false, item };
    const addToList = [...listItem, newItem];
    setAndSaveItem(addToList);
  
  };

  const deleteItem = (id) => {
    const filteredList = listItem.filter(item => item.id !== id)
    setAndSaveItem(filteredList)
  }

  const handleCheck = (id) => {
    const checkedItems = listItem.map((item) =>
       item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItem(checkedItems)
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
      <List listItem={listItem} deleteItem={deleteItem} handleCheck={handleCheck}/>
    </div>
  );
}

export default App;