import React, { useState } from "react";

const SaearchBar = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSearch(input);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <label className="field">Video Search</label>
        <input value={input} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SaearchBar;
