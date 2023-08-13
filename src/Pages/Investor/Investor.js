import React, { useEffect, useReducer } from "react";
import "./Investor.css";

function Investor() {
  useEffect(() => {
    fetch("http://localhost:4081/api/colleges")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DATA", data: data }))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const number = Math.floor(Math.random() * 100);

  const initalState = {
    count: 0,
    num: 0,
    college: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      case "NUMBER":
        return {
          ...state,
          num: action.payload,
        };
      case "DATA":
        return {
          ...state,
          college: action.data,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <div className="investor-main">
        <div className="investor-body">
          <div>{state.count}</div>
          <div>{state?.college?.collegeList?.[0]?.name}</div>

          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            Increment++
          </button>
          <br />
          <button
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            Decrement--
          </button>

          <br />
          <button
            onClick={() => {
              dispatch({ type: "NUMBER", payload: number });
            }}
          >
            Random
          </button>
        </div>
      </div>
    </>
  );
}

export default Investor;
