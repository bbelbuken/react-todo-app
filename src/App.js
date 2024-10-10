import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive data");
        const listItems = await response.json();
        setListItem(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.msg);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);

  const addItem = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const addToList = [...listItem, newItem];
    setListItem(addToList);
  };

  const deleteItem = (id) => {
    const filteredList = listItem.filter((item) => item.id !== id);
    setListItem(filteredList);
  };

  const handleCheck = (id) => {
    const checkedItems = listItem.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setListItem(checkedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addItem(inputValue);
    setInputValue("");
  };

  return (
    <div>
      {isLoading ? (<>
        <CircularProgress className="backdrop" />
        <p>Receiving Data</p>
      </>
      ) : (
        <div className="container">
          <Header />
          <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
          />
          <List
            listItem={listItem}
            deleteItem={deleteItem}
            handleCheck={handleCheck}
          />
        </div>
      )}
    </div>
  );
}

export default App;
