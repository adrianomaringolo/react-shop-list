import "./App.css";

import styled from "styled-components";

import { ItemsList } from "./components/ItemsList";
import "firebase/firestore";

const ShopListArea = styled.div`
  background: #fff;
  max-width: 650px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px #fff, 0 0 10px #fff;

  .logoArea {
    display: flex;
    padding-left: 20px;
    align-items: center;
  }

  h1 {
    font-size: 3em;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    margin: 0%;
    padding: 20px 0;
  }

  .logo {
    height: 60px;
    margin-right: 20px;
  }
`;

function App() {
  return (
    <div className="App">
      <ShopListArea>
        <ItemsList />
      </ShopListArea>
    </div>
  );
}

export default App;
