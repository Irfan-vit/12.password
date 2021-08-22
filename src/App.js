import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");

  function ckickHandler() {
    try {
      if (input.length >= 10) {
        setColor("green");
        return;
      } else if (input.length < 10) {
        setColor("red");
        var e = new Error("password is lesser than 10 characters");
        e.name = "PasswordError";
        throw e;
      }
    } catch (e) {
      alert(e);
      // throw e;
    }
  }
  return (
    <div className="App">
      <input
        style={{ backgroundColor: `${color}` }}
        onChange={(e) => setInput(e.target.value)}
        placeholder="min length = 10"
        type="password"
      ></input>
      <button onClick={ckickHandler} disabled={input.length <= 10}>
        Password
      </button>
    </div>
  );
}
