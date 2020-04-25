import React from "react";

import PropTypes from "prop-types";
import { StyledBurger } from "./Burger.styled.js";

const Burger = ({ open, setOpen }) => (
  <StyledBurger

    open={open}
    onClick={() => setOpen(!open)}
  >
    <div />
    <div />
    <div />
  </StyledBurger>
);
Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
