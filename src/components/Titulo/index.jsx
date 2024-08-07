import React from 'react'

const Titulo = ({cor, fonteTamanho, alinhamento, children}) => {
    const corDaFonte = cor ? cor : 'text-black';
    const tamanhoDaFonte = fonteTamanho ? fonteTamanho : 'text-lg';
    const alinhamentoDoTexto = alinhamento ? alinhamento : 'text-center';

  return (
    <h2 className={` w-full py-8 px-0 bg-white ${corDaFonte} ${tamanhoDaFonte} ${alinhamentoDoTexto} m-0 uppercase font-bold `} >{children}</h2>
  )
}

export default Titulo