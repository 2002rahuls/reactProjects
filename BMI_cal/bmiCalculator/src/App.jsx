import { useState } from "react";

import "./App.css";

function App() {
  ///making State
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (event) => {
    event.preventDefault();
    if (weight === "" || height === "") {
      alert("please enter a valid values");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a healthy person");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI</h2>
        <form onSubmit={calBmi}>
          <div>
            <label> Weight(lbs)</label>
            <input
              type="text"
              className="text"
              placeholder="Enter weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>

          <div>
            <label> Height(in)</label>
            <input
              type="text"
              className="text"
              placeholder="Enter height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn m-1" type="submit">
              Submit
            </button>

            <button
              className="btn btn-outline m-1"
              onClick={reload}
              type="submit"
            >
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
