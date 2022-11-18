import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function SearchBar(props) {

  const closeSearchBar = () => {
    props.setSearchbar(false);
  };


  return (
    <div className={props.searchbar ? "search-bar active" : "search-bar fade"}>
      <div className="container">
        <div className="wrapper">
          <form action="#" method="post" className="form">
            <BiSearchAlt />
            <input type="text" name="" id="" />
          </form>
          <button className="icon" onClick={() => closeSearchBar()}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
