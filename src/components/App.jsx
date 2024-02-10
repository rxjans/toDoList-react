import React, { useState } from "react";
import ListItem from "./list";
import InputText from "./input";

function App() {
  const [state, newState] = useState("");
  const [items, newItems] = useState([]);

  function update(e) {
    newItems((prevValue) => {
      return [...prevValue, state];
    });
    newState("");
  }

  function del(id) {
    newItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputText stt={state} btn={update} newstt={newState} />
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ListItem key={index} id={index} onCheck={del} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;