import React from "react";

function inputText(props) {
  function onChange(e) {
    const name = e.target.value;
    props.newstt(name);
  }
  return (
    <div className="form">
      <input onChange={onChange} value={props.stt} type="text" />
      <button
        onClick={() => {
          props.btn();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default inputText;