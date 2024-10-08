import React from "react";

const Form = ({inputValue, setInputValue}) => {
  return (
    <form className="form" >
      <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <button>
        <span>Add</span>
      </button>
    </form>
  );
};

export default Form;
