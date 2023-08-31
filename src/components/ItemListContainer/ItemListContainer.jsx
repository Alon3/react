import React from "react";

const itemListContainer = ({ greetings }) => {
  return (
    <div className="item-list-container">
      <p>{greetings}</p>
    </div>
  );
};

export default itemListContainer;
