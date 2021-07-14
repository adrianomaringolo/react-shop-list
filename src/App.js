
import './App.css';
import logo from './logo.png';
import styled from 'styled-components'
import { ClearButton } from './components/ClearButton'

const ShopListArea = styled.div`
  background: #fff;
  max-width: 650px;
  min-height: 800px;
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
    margin-right: 20px
  }
`

function App() {
  
  return (
    <div className="App">
      <ShopListArea>
        <h1 className="logoArea">
          <img src={logo} className="logo" alt="logo" /> React Shop List
          <ClearButton>CLEAR</ClearButton>
        </h1>
      </ShopListArea>
    </div>
  );
}

export default App;
