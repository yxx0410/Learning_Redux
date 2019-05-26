import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { visibilityFilter, visibilityFilters } from "./action/todo";
import Filter from "./Fliter";
const FilterList = ({ onClick, filter }) => {
  return (
    <div>
      <Filter
        onClick={() => {
          onClick(visibilityFilters.SHOW_ALL);
        }}
        active={filter === visibilityFilters.SHOW_ALL}
      >
        Show All
      </Filter>

      <Filter
        onClick={() => {
          onClick(visibilityFilters.SHOW_ACTIVE);
        }}
        active={filter === visibilityFilters.SHOW_ACTIVE}
      >
        Show Active
      </Filter>
      <Filter
        onClick={() => {
          onClick(visibilityFilters.SHOW_COMPLETED);
        }}
        active={filter === visibilityFilters.SHOW_COMPLETED}
      >
        Show Completed
      </Filter>
    </div>
  );
};

FilterList.propTypes = {
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filter: state.visibilityFilter
});
const mapDispatchToProps = dispatch => ({
  onClick: filter => dispatch(visibilityFilter(filter))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
