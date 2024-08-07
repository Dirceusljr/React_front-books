import React from "react";
import Titulo from "../Titulo";

const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {
  return (
    <div className="items-center bg-white shadow-card rounded-[10px] flex my-0 mx-auto py-6 px-5 justify-around max-w-[600px] w-full">
        <div>
            <Titulo
                cor="text-[#EB9B00]"
                fonteTamanho="text-[18px]"
                alinhamento="text-left"
            >{titulo}</Titulo>
            <h4 className=" text-gradiente-200 text-lg font-bold my-4 mx-0 ">{subtitulo}</h4>
            <p className=" max-w-[300px] ">{descricao}</p>
        </div>
        <div>
            <img src={img} className="w-[150px]"/>
            <button className=" bg-texto-100 text-white py-[10px] px-0 text-base border-none font-black block text-center w-[150px] hover:cursor-pointer">Saiba mais</button>
        </div>
    </div>
  );
};

export default CardRecomenda;
