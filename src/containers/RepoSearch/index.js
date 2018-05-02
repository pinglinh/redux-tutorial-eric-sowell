import { connect } from "react-redux";

import { SEARCH_INPUT_CHANGE } from "../../actions/api";
import Api from "../../actions/api";

import RepoSearch from "../../components/RepoSearch";

const mapStateToProps = state => {
  return {
    inputValue: state.searchInputValue,
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      dispatch({
        type: SEARCH_INPUT_CHANGE,
        value: event.target.value
      });
    },
    handleSubmit: (event, query) => {
      event.preventDefault();
      Api.getRepos(dispatch, query);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);
