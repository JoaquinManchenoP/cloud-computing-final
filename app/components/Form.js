"use client";
import React, { useEffect, useState } from "react";
import { getAllItems, addItem } from "../../dynamodb";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems = await getAllItems();
      setItems(fetchedItems);
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const newDataObject = [
      ...items,
      { person_name: inputValue, person_last_name: inputValue },
    ];
    addItem(inputValue);
    setItems(newDataObject);
    setInputValue("");
  };

  const handleDelete = (index, person_name) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    // deleteItem(person_name);
  };

  return (
    <div className="container space-y-10">
      <div className="section__title">
        <h1 className="font-extrabold text-xl">
          Store your name in AWS database
        </h1>
      </div>
      <div className="input space-y-3">
        <p>Input your name:</p>
        <div className="input__section space-x-5">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="text-black h-10 w-[250px] rounded-md text-center"
            placeholder="What is your name ?"
          ></input>
          <button
            className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>
      </div>
      <ul>
        <div className="list space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="h-full w-full flex space-x-5">
              <p>{item.person_name}</p>
              <button
                className="rounded-full bg-red-500 w-7 h-7 flex items-center justify-center text-white"
                onClick={() => handleDelete(idx, item.person_name)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Form;
