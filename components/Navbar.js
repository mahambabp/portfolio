import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import HomeIcon from "@material-ui/icons/Home";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-2">
      <Navbar className="bg-secondary" color="light" light expand="md">
        <NavbarBrand href="/">
          <HomeIcon className=" text-success"    />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/about" className=" text-success" >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects" className=" text-success" >Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume" className=" text-success" >Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://bafanarelated.blogspot.com/" className=" text-success" >Blog</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="text-left">
            <NavLink href="/contact" className=" text-success mr-6" id="contact">Contact</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>

    </div>
  );
};

export default NavBar;
