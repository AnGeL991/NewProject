import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";
import { StyledMenu } from "./Menu.Styled.js";

const Component = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className={styles.menu} >
        <nav>
          <NavLink to="/post" className={styles.link}>
            Ogłoszenia
          </NavLink>
          <NavLink to="/post" className={styles.link}>
            Dodaj Ogłoszenie
          </NavLink>
          <NavLink to="/bestadvertisement" className={styles.link}>
            Ogłoszenie tygodnia
          </NavLink>
          <NavLink to="/account" className={styles.link}>
            Zaloguj Się
          </NavLink>
        </nav>
      </div>
    </StyledMenu>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
};

export { Component as Menu };
