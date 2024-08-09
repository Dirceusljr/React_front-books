import React, { useEffect, useState } from 'react'
import Input from '../Input'
import { getLivros } from '../../services/livros'
import { postFavoritos } from '../../services/favoritos'
import livroImg from '../../assets/livro.png'

const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaApi = await getLivros()
        setLivros(livrosDaApi)
    }

    async function insertFavorito(id) {
        await postFavoritos(id)
        alert(`Livro de id ${id} adicionado aos favoritos`)
    }

  return (
    <section className='bg-gradiente-decresc text-white text-center py-20 px-0 h-auto w-full box-content'>
        <h2 className=' text-white text-4xl text-center w-full mb-10 font-bold'>Já sabe por onde começar?</h2>
        <h3 className=' text-base font-medium mb-10 '>Encontre seu livro em nossa estante.</h3>
        <Input 
            placeholder="Escreva sua próxima leitura"
            onBlur={evento => {
                const textoDigitado = evento.target.value;
                if(!textoDigitado) return setLivrosPesquisados([])
                const resultadoPesquisa = livros.filter((livro) => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
        />
        {livrosPesquisados.map( livro => (
            <div className=' flex justify-center items-center mb-5 cursor-pointer hover:border hover:border-solid hover:border-white border border-solid border-transparent ' key={livro.id} onClick={() => insertFavorito(livro.id)}>
                <img src={livroImg} className=' w-24 '/>
                <p className=' w-52 '>{livro.nome}</p>
            </div>
        ))}
        
    </section>
  )
}

export default Pesquisa