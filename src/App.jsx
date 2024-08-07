import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";

function App() {
  return (
    <div className=" w-screen h-screen bg-gradiente-cresc ">
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </div>
  );
}

export default App;
