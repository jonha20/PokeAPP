import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
const Nav = () => {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
     <Menu right>
      <Link className="menu-item" to="/">
        Lista
      </Link>
      <Link className="menu-item" to="/new">
        Añadir Pokemon
      </Link>
    </Menu>
    );
  }


export default Nav;