import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { CardContext } from "../Context/CardContext";

const Navigation = (props) => {
  const {cards} = useContext(CardContext);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cards.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
