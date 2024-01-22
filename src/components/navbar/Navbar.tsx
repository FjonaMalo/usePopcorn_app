import "../../App.css";
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults />
        {/* <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p> */}
      </nav>
    </div>
  );
};

export default Navbar;
