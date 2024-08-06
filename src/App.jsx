import logo from "./assets/logo.svg";

function App() {
  return (
    <div>
      <header>
        <div className="flex"> 
          <img src={logo} alt="logo" />
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
