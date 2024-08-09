import { useEffect, useState } from "react";
import { deleteFavoritos, getFavoritos } from "../services/favoritos";
import livroImg from "../assets/livro.png";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    setFavoritos(favoritosDaApi);
  }
  async function deletaFavorito(id) {
    await deleteFavoritos(id);
    await fetchFavoritos();
    alert(`Livro de id ${id} removido dos favoritos`);
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <div className=" w-screen h-screen bg-gradiente-decresc ">
      <h2 className=" text-white text-4xl text-center w-full pt-9 ">Aqui estão seus livros favoritos:</h2>
      <div className=" flex flex-wrap justify-center ">
        {favoritos.length !== 0 ? favoritos.map((favorito, index) => (
          <div className=" flex justify-center items-center my-5 mx-0 cursor-pointer text-center py-1 px-24 border border-solid border-transparent hover:border hover:border-solid hover:border-white " key={favorito.id} onClick={() => deletaFavorito(favorito.id)}>
            <p className=" w-52 text-white ">{favorito.nome}</p>
            <img src={livroImg} className="w-24" />
          </div>
        )) : null}
      </div>
    </div>
  );
}

export default Favoritos;
