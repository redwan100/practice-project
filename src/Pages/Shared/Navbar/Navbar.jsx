import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(ContextProvider);
  const navigate = useNavigate();
  const signOut = () => {
    userSignOut().then(() => {
      navigate("/sign-in");
    });
  };
  const options = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/form">Form</NavLink>
      </li>
      <li>
        <NavLink to="/topRated">Top Rated</NavLink>
      </li>
      <li>
        <NavLink to="/counter">Counter</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200">
      <div className="navbar  container lg:w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {options}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 uppercase">{options}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button className="btn btn-accent btn-sm" onClick={signOut}>
              Log out
            </button>
          ) : (
            <Link to={"/sign-in"}>
              <button className="btn btn-accent btn-sm">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
