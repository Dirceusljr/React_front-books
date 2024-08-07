import React, { useState } from 'react'
import Input from '../Input'
import { livros } from './dadosPesquisa'

const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
  return (
    <section className='bg-gradiente-decresc text-white text-center py-20 px-0 h-pesquisa w-full '>
        <h2 className=' text-white text-4xl text-center w-full mb-10 font-bold'>Já sabe por onde começar?</h2>
        <h3 className=' text-base font-medium mb-10 '>Encontre seu livro em nossa estante.</h3>
        <Input 
            placeholder="Escreva sua próxima leitura"
            onBlur={evento => {
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter((livro) => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
        />
        {livrosPesquisados.map( livro => (
            <div className=' flex justify-center items-center mb-5 cursor-pointer hover:border hover:border-solid hover:border-white ' key={livro.id}>
                <img src={livro.src} className=' w-24 '/>
                <p className=' w-52 '>{livro.nome}</p>
            </div>
        ))}
        
    </section>
  )
}

export default Pesquisa