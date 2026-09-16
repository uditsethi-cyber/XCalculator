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
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item size={3}>
            <button onClick={handleExp}>7</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>8</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>9</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>+</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>4</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>5</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>6</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>-</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>1</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>2</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>3</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>*</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={() => setExp("")}>C</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>0</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={showResult}>=</button>
          </Grid>
          <Grid item size={3}>
            <button onClick={handleExp}>/</button>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default App;
