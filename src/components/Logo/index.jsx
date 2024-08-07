import logo from "../../assets/logo.svg";


const Logo = () => {
  return (
    <div className="flex items-center"> 
    <img src={logo} alt="logo" className="mr-2.5" />
    <p className="text-3xl "><strong>Alura</strong> Books</p>
  </div>
  )
}

export default Logo