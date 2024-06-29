import "./App.css";
import { useState, useReducer } from "react";
import resultReducer from "./reducer/Reducer";

function App() {
  const [firestNumberInout, setFirstNumberInput] = useState(null);
  const [secndNumberInput, setSecndNumberInput] = useState(null);

  const [result2, dispatch] = useReducer(resultReducer, 0);

  function hndleSumClic() {
    dispatch({
      type: "sum",
      payload: {
        firstNumber: firestNumberInout,
        scondNumber: secndNumberInput,
      },
    });
    setFirstNumberInput("");
    setSecndNumberInput("");
  }

  function hndleSubClic() {
    dispatch({
      type: "Sub",
      payload: {
        firstNumber: firestNumberInout,
        scondNumber: secndNumberInput,
      },
    });
    setFirstNumberInput("");
    setSecndNumberInput("");
  }
  function hndleMultClic() {
    dispatch({
      type: "Mult",
      payload: {
        firstNumber: firestNumberInout,
        scondNumber: secndNumberInput,
      },
    });
    setFirstNumberInput("");
    setSecndNumberInput("");
  }
  function hndleDivClic() {
    dispatch({
      type: "DivClic",
      payload: {
        firstNumber: firestNumberInout,
        scondNumber: secndNumberInput,
      },
    });
    setFirstNumberInput("");
    setSecndNumberInput("");
  }
  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
          padding: "25px",
          margin: "5px",
        }}
      >
        <label>FirsNumber</label>
        <input
          value={firestNumberInout}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        <label>ScundNumber</label>
        <input
          value={secndNumberInput}
          onChange={(e) => setSecndNumberInput(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            background: "teal",
            marginTop:"10px",
            
          
          }}
        >
          <button style={{margin:"5px"}} onClick={hndleSumClic}>Sum</button>
          <button style={{margin:"5px"}} onClick={hndleSubClic}>Sub</button>
          <button style={{margin:"5px"}} onClick={hndleMultClic}>Mul</button>
          <button onClick={hndleDivClic}>Div</button>
        </div>

        <h2>{result2}</h2>
      </div>
    </div>
  );
}

export default App;
