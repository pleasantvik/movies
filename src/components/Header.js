import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.handleForm(input);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <header className="header">
      <form id="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search"
          onChange={onInputChange}
          value={input}
        />
      </form>
    </header>
  );
};

export default Header;
