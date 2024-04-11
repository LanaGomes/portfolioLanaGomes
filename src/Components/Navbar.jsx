import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="wrapperNavBar">
      <Link to={`#about`}>About</Link>
      <Link to={`#projects`}>Projects</Link>
      <Link to={`#contact`}>Contact</Link>
    </nav>
  );
}
export default Navbar;
