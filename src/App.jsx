import { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";

function App() {
  const [result, setResult] = useState("");
  const [exp, setExp] = useState("");
  const showResult = () => {
    try {
      const res = eval(exp);
      setResult(res);
    } catch (e) {
      setResult("Error");
    }
  };
  const handleExp = (e) => {
    console.log(e);
    setExp((prev) => prev + e.target.innerText);
  };
  return (
    <>
      <section id="center">
        <h3>React Calculator</h3>
        <input
          value={exp}
          onChange={(e) => setExp(e.target.value)}
          width="100%"
        />
        <h3>{result}</h3>
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            width: "100%",
          }}
        >
          <button onClick={handleExp}>7</button>
          <button onClick={handleExp}>8</button>
          <button onClick={handleExp}>9</button>
          <button onClick={handleExp}>+</button>
          <button onClick={handleExp}>4</button>
          <button onClick={handleExp}>5</button>
          <button onClick={handleExp}>6</button>
          <button onClick={handleExp}>-</button>
          <button onClick={handleExp}>1</button>
          <button onClick={handleExp}>2</button>
          <button onClick={handleExp}>3</button>
          <button onClick={handleExp}>*</button>
          <button onClick={() => setExp("")}>C</button>
          <button onClick={handleExp}>0</button>
          <button onClick={showResult}>=</button>
          <button onClick={handleExp}>/</button>
        </Grid>
      </section>
    </>
  );
}

export default App;
