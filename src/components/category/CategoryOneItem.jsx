import React from "react";
import { multilanguage } from "redux-multilanguage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CategoryOneItem({ strings, data }) {
  const dispatch = useDispatch();

  const changeCategory = (e, data) => {

    /* 
    *import { setCategoryone } from "../../redux/actions/categoryoneActions";
    *there use the action of reducer
    -------------------------------
    dispatch(setCategoryone( param1,.... ))
    */

    /* 
        *there use the reducer
        ----------------------
        dispatch({ type : "NAME",  payload : {param1: value1,......} })
    */
    dispatch({ type: "SET_CATEGORYONE", payload: { categoryID: data.id,category : data } });
  };

  const categoryoneData = useSelector((state) => state.categoryoneData);

  return (
    <li>
      <button
        className={data.id === categoryoneData.categoryID ? "active" : ""}
        onClick={(e) => changeCategory(e, data)}
      >
        {" "}
        {strings[data.title]}{" "}
      </button>
    </li>
  );
}

export default multilanguage(CategoryOneItem);
