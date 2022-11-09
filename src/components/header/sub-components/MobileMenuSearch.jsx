import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import {multilanguage} from 'redux-multilanguage'

function MobileMenuSearch({strings}) {
  return (
    <div className="search-container">
      <form className="search-wrapper" action="#" method="post">
        <input
          className="input-text"
          type="text"
          name="search"
          id="search"
          placeholder="Entrer ici"
        />
        <RiSearch2Line className="icon-medium" />
      </form>
    </div>
  );
}
export default multilanguage(MobileMenuSearch);
