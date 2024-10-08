import React from "react";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState([]);

  const addItem = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;    
    const newItem = { id, item };
    const itemList = [...listItem, newItem];
    setListItem(itemList);
  };

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
      <List listItem={listItem}/>
    </div>
  );
}

export default App;
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
