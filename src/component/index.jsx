import "./index.css";
import React, { useState } from "react";

const Index = () => {
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    const query = event.target.value;

    let updatedList = [...itemList];

    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
  };

  return (
    <div className="parent">
      <div className="App">
        <div className="search-header">
          <div className="search-text">Search:</div>
          <input id="search-box" onChange={filterBySearch} />
        </div>
        <div id="item-list">
          <ol>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Index;
