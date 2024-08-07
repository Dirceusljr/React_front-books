import React from "react";
import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";

const icones = [perfil, sacola]

const IconesHeader = () => {
  return (
    <ul className="flex items-center">
      {icones.map((icone, index) => (
        <li key={index}>
          <img src={icone} className="mr-10 w-8 h-10" />
        </li>
      ))}
    </ul>
  );
};

export default IconesHeader;
