import React from "react";
import PropTypes from "prop-types";

const Filter = ({ active, children, onClick }) => {
  return (
    <button disabled={active} onClick={onClick}>
      {children}
    </button>
  );
};

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;
