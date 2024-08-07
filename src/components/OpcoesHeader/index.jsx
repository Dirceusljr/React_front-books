const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const OpcoesHeader = () => {
  return (
    <ul className="flex">
      {textoOpcoes.map((opcao) => (
        <li
          key={opcao}
          className="text-base flex justify-center items-center text-center h-full py-0 px-1.5 cursor-pointer min-w-32 "
        >
          <p>{opcao}</p>
        </li>
      ))}
    </ul>
  );
};

export default OpcoesHeader;
