import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button1 from "./component/Button/Button1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button1 buttonName="Masuk" className="btn-masuk" />
      <br></br>
      <br></br>
      <Button1 buttonName="Lanjut" className="btn-lanjut" />
      <br></br>
      <br></br>
      <Button1 buttonName="Google" className="btn-google" />
      <br></br>
      <br></br>
      <Button1 buttonName="Pilihan" className="btn-option" />
    </>
  );
}

export default App;
