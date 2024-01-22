import "../../App.css";
import { MoviesMainProps } from "../../types";
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

const Navbar = ({ movies }: MoviesMainProps) => {
  console.log(movies);

  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </nav>
    </div>
  );
};

export default Navbar;
