import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button1 from "./component/Button/Button1";
import Cards from "./component/Cards/Cards";
import SetorBeli from "./component/SetorBeli/SetorBeli";
import Home from "./pages/Home";
import { button } from "./data/button";
import { formRegist, formSignin } from "./data/FormData";
import { Form, NavLink } from "react-router-dom";
import AlamatBaru from "./component/Alamat/AlamatBaru";
import AlamatPilih from "./component/Alamat/AlamatPilih";
import SignIn from "./pages/Signin/SignIn";
import FormComponent from "./component/Form/FormComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Button1 buttonName="Masuk" className="btn-masuk" />
      <br></br>
      <br></br>
      <Button1 buttonName="Lanjut" className="btn-lanjut" />
      <br></br>
      <br></br>
      <Button1 buttonName="Masuk dengan Google" className="btn-google" />
      <br></br>
      <br></br>
      <Button1 buttonName="Pilihan" className="btn-option" />
      <br></br>
      <br></br>
      <Button1 buttonName="Coba aja sih" className="btn-google" />
      <Cards />
      <SetorBeli />
      <Home />
      {button.map((button) => {
        return (
          <>
            <Button1
              key={button.id}
              buttonName={button.buttonName}
              className={button.className}
            />
            <br />
          </>
        );
      })} */}
      {/* <AlamatBaru /> */}
      {/* <AlamatPilih /> */}
      <SignIn />
      {/* {formSignin.map((signin) => {
        return (
          <FormComponent
            key={signin.id}
            FormLabel={signin.FormLabel}
            FormType={signin.FormType}
            FormName={signin.FormName}
            FormID={signin.FormID}
            FormPlacehldr={signin.FormPlacehldr}
          />
        );
      })} */}
    </>
  );
}

export default App;
