import "./App.css";
import { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add,sub,mul,div } from "./features/calcs/calcSlice";

function App() {
  const resultStat = useSelector((state) => {
    return state.calc.result;
  });
  const dispatch = useDispatch();

  const [firestNumberInout, setFirstNumberInput] = useState(null);
  const [secndNumberInput, setSecndNumberInput] = useState(null);

  function hndleSumClic() {
    dispatch(
      add({
        firestNumberInout: firestNumberInout,
        secndNumberInput: secndNumberInput,
      })
    );

    setFirstNumberInput("");
    setSecndNumberInput("");
  }

  function hndleSubClic() {
    dispatch(
      sub({
        firestNumberInout: firestNumberInout,
        secndNumberInput: secndNumberInput,
      })
    );
    setFirstNumberInput("");
    setSecndNumberInput("");
  }
  function hndleMultClic() {
    dispatch(
      mul({
        firestNumberInout: firestNumberInout,
        secndNumberInput: secndNumberInput,
      })
    );
    setFirstNumberInput("");
    setSecndNumberInput("");
  }
  function hndleDivClic() {
    dispatch(
      div({
        firestNumberInout: firestNumberInout,
        secndNumberInput: secndNumberInput,
      })
    );
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
            marginTop: "10px",
          }}
        >
          <button style={{ margin: "5px" }} onClick={hndleSumClic}>
            Sum
          </button>
          <button style={{ margin: "5px" }} onClick={hndleSubClic}>
            Sub
          </button>
          <button style={{ margin: "5px" }} onClick={hndleMultClic}>
            Mul
          </button>
          <button onClick={hndleDivClic}>Div</button>
        </div>

        <h2>{resultStat}</h2>
      </div>
    </div>
  );
}

export default App;
