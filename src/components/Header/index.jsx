import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";

const Header = () => {
  return (
    <header className=" bg-white flex h-24 justify-center gap-10">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
};

export default Header;
