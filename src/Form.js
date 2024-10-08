import React from "react";

const Form = ({inputValue, setInputValue, handleSubmit}) => {
  return (
    <form className="form" onSubmit={handleSubmit} >
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
