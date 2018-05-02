import { SEARCH_INPUT_CHANGE, SET_REPOS } from "../../actions/api";

const initialState = {
  repos: [],
  searchInputValue: ""
};

// const RepoSearch = (state = initialState, action) => {
//   console.log("reducer", action);
//   switch (action.type) {
//     case SEARCH_INPUT_CHANGE:
//       return Object.assign({}, state, { searchInputValue: action.value });
//     case SET_REPOS:
//       return Object.assign({}, state, { repos: action.repos });
//     default:
//       return state;
//   }
// };

const RepoSearchReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case SEARCH_INPUT_CHANGE:
      return { ...state, searchInputValue: action.value };
    case SET_REPOS:
      return { ...state, repos: action.repos };
    default:
      return state;
  }
};

export default RepoSearchReducer;
