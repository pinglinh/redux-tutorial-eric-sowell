export const SEARCH_INPUT_CHANGE = "SEARCH_INPUT_CHANGE";
export const SET_REPOS = "SET_REPOS";

function getRepos(dispatch, query) {
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log("do we have data?", data);
      dispatch({
        type: SET_REPOS,
        repos: data.items
      });
    });
}

export default {
  getRepos
};
