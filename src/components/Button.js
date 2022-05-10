import React from "react";

function Button({ data, emoji, handleClick }) {
  return (
    <>
      <button onClick={handleClick}>
        {data}
        {emoji}
      </button>
    </>
  );
}
export default Button;
