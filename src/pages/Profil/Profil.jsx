import React from "react";

const Profil = (props) => {
  const { children } = props;
  return (
    <>
      <div id="headProfil" className="flex my-8">
        <p className="mx-auto font-semibold text-lg">Profil</p>
      </div>
      {children}
    </>
  );
};

export default Profil;
