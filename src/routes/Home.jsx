import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";

function Home() {
  return (
    <div className=" w-screen h-screen bg-gradiente-cresc ">
      <Pesquisa />
      <UltimosLancamentos />
    </div>
  );
}

export default Home;
