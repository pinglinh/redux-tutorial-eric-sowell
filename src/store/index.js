import { createStore } from "redux";

// import reducers from "../reducers";
// Only use this if there is more than 1 reducer

import RepoSearchReducer from "../reducers/RepoSearch";

const store = createStore(RepoSearchReducer);

export default store;
