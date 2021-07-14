import { useEffect, useState } from "react";
import { ItemsService } from "../services/ItemsService";
import styled from "styled-components";
import { AddButton } from "./AddButton";
import { ClearButton } from "./ClearButton";
import { RemoveButton } from "./RemoveButton";
import logo from "./../logo.png";

const ListArea = styled.div`
  overflow-y: auto;
  max-height: 500px;
  .item {
    border-bottom: 1px solid #ccc;
    padding: 20px;
    font-size: 3em;
    display: flex;

    input[type="checkbox"] {
      position: relative;
      width: 3em;
      height: 3em;
      color: $black;
      border: 1px solid #555;
      border-radius: 4px;
      appearance: none;
      outline: 0;
      cursor: pointer;
      transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
      &::before {
        position: absolute;
        content: "";
        display: block;
        top: 0px;
        left: 10px;
        width: 15px;
        height: 27px;
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
      &:checked {
        color: #fff;
        border-color: #00d8fe;
        background: #00d8fe;
        &::before {
          opacity: 1;
        }
        ~ label::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      }
    }

    label {
      position: relative;
      cursor: pointer;
      padding: 0 0.25em 0;
      user-select: none;
      &::before {
        position: absolute;
        content: attr(data-content);
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        text-decoration: line-through;
        text-decoration-thickness: 3px;
        text-decoration-color: $black;
        transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }
`;

const ItemToAdd = styled.form`

    display: flex;
    justify-content: center;
    padding: 20px;
    width: 90%;
    position: relative;
    input {
      width: 80%;
      border: none;
      border-bottom: 3px solid #ccc;
      font-size: 3em;
      outline: none;
    }
    button {
      min-width: 50px;
      position: absolute;
      font-size: 2.2em;
      right: 10px;
    }
  
`;

export const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [textToAdd, setTextToAdd] = useState("");

  const getItems = async () => setItems(await ItemsService.getItems());

  useEffect(() => {
    getItems();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();
    await ItemsService.addItem(textToAdd);
    getItems();
    setTextToAdd("");
  };

  const checkItem = async (itemId, checked) => {
    await ItemsService.checkItem(itemId, checked);
    getItems();
  };

  const removeAll = async () => {
    await ItemsService.removeAll();
    getItems();
  };

  const removeItem = async (itemId) => {
    await ItemsService.removeItem(itemId);
    getItems();
  };

  return (
    <>
      <h1 className="logoArea">
        <img src={logo} className="logo" alt="logo" /> React Shop List
        <ClearButton onClick={removeAll}>CLEAR</ClearButton>
      </h1>
      <ListArea>
        {items &&
          items.map((item) => (
            <div className="item" key={item.id}>
              <input
                type="checkbox"
                name="todo"
                checked={item.checked}
                onChange={(_) => checkItem(item.id, !item.checked)}
              />
              <label for="todo" data-content={item.text}>
                {item.text}
              </label>
              <RemoveButton onClick={() => removeItem(item.id)}>X</RemoveButton>
            </div>
          ))}
      </ListArea>
      <ItemToAdd className="itemToAdd" onSubmit={addItem}>
        <input
          type="text"
          onChange={(e) => setTextToAdd(e.target.value)}
          value={textToAdd}
        />
        <AddButton type="submit">ADD</AddButton>
      </ItemToAdd>
    </>
  );
};
