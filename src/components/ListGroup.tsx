import React, { useState } from "react";
//import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Benjamin Cordero",
    "Hans Barnert",
    "Aldo Jimenez",
    "Cristobal Quijanes",
  ];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No item found</p> : null;
  const message2 = items.length === 0 && <p>No item found</p>;

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {message}
      {message2}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
