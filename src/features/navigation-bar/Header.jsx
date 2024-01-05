import Cart from "./Cart";
import NavBar from "./NavBar";
import Logo from "./Logo";
const Header = () => {
  return (
    <header>
      <Logo />
      <div className="links">
        <NavBar />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
