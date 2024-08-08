import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-white flex h-24 justify-center gap-10 items-center">
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
};

export default Header;
