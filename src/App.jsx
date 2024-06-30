import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button1 from "./component/Button/Button1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button1 buttonName="Klik dong" />
    </>
  );
}

export default App;
