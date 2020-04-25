import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useOnClickOutSide } from "../../../hooks/hooks";
//import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import styles from "./Header.module.scss";
import Burger from "../../common/Burger/Burger";
import { Menu } from "../../features/Menu/Menu";

const Component = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const node = useRef();
  useOnClickOutSide(node, () => setOpen(false));
  return (
    <div  ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Header };
