import { connect } from "react-redux";

import CompletedList from "./CompletedList";
import { getCompletedArray } from "../todo/selectors/index";

const mapStateToProps = state => {
  return {
    completions: getCompletedArray(state)
  };
};

export default connect(mapStateToProps)(CompletedList);
