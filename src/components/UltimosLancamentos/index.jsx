import React from "react";
import { livros } from "./dadosUltimosLancamentos";
import Titulo from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../assets/livro2.png"

const UltimosLancamentos = () => {
  return (
    <section className=" bg-gradiente-300 pb-5 flex flex-col ">
      <Titulo cor="text-[#EB9B00]" fonteTamanho="text-[36px]">
        Últimos Lançamentos
      </Titulo>
      <div className=" mt-8 flex w-full justify-center cursor-pointer ">
        {livros.map((livro) => (
          <img src={livro.src} key={livro.id} />
        ))}
      </div>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </section>
  );
};

export default UltimosLancamentos;
