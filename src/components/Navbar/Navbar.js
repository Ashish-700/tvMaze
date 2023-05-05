import { Link, Outlet } from "react-router-dom";

//styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/" className="logo">
            TVMAZE
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
