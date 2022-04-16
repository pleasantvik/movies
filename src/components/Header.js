import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = (props) => {
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(input);

    // const search = (term) => {
    //   axios
    //     .get(
    //       `https://api.themoviedb.org/3/search/movie?api_key=67c2c5de8f98b7a053bf1468a1290d61&query=${term}`
    //     )
    //     .then((res) => {
    //       console.log(res.data.results);
    //       setInput(res.data.results);
    //     });
    // };
    // search(e.terget.value);

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
