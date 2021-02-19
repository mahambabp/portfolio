import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";

//Header component that aids a user in navigating the page

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 text-success">
    <div  className="container">
      <Link link href="/">
      <a className="navbar-brand text-success" >
          <HomeIcon />
      </a>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link  text-success ">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className="nav-link  text-success">Projects</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume">
              <a className="nav-link  text-success">Resume</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link  text-success">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
