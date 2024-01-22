import "../../App.css";
import { ChildrenProps } from "../../types";
import Logo from "./Logo";

const Navbar = ({ children }: ChildrenProps) => {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
    </div>
  );
};

export default Navbar;
