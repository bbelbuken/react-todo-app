import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import CircularProgress from "@mui/material/CircularProgress";
import ApiRequest from "./ApiRequest";

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
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);


  const addItem = async (item) => {
    const id = listItem.length ? (parseInt(listItem[listItem.length - 1].id, 10) + 1).toString()  : 1;
    const newItem = { id, checked: false, item };
    const addToList = [...listItem, newItem];
    setListItem(addToList);

    const addMethod = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }
    const result = await ApiRequest(API_URL, addMethod)
    if (result) setFetchError(result)
  };


  const deleteItem = async (id) => {
    const filteredList = listItem.filter((item) => item.id !== id);
    setListItem(filteredList);

    const deleteMethod = { method: 'DELETE'};
    const reqURL = `${API_URL}/${id}`
    const result = await ApiRequest(reqURL, deleteMethod)
    if (result) setFetchError(result)
  };


  const handleCheck = async (id) => {
    const checkedItems = listItem.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setListItem(checkedItems);
    

    const myItem = checkedItems.find(item => item.id === id)
    const updateMethod = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({checked: myItem.checked})
    }
    const reqURL = `${API_URL}/${id}`
    const result = await ApiRequest(reqURL, updateMethod)
    if (result) setFetchError(result)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addItem(inputValue);
    setInputValue("");
  };

  return (
    <div>
      {isLoading && (
        <>
          <CircularProgress className="backdrop" />
          <p>Receiving Data</p>
        </>
      )}
      {fetchError && (
        <p
          style={{ color: "red", marginTop: "5rem" }}
        >{`Error : ${fetchError}`}</p>
      )}
      {!isLoading && !fetchError && (
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
