import React from "react";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";

function App() {
  const [item, setItem] = useState("");

  return (
    <div className="container">
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
