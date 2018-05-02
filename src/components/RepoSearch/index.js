import React from "react";

const RepoSearch = props => {
  return (
    <div>
      <h1>Repo Search</h1>
      <form onSubmit={event => props.handleSubmit(event, props.inputValue)}>
        <input value={props.inputValue} onChange={props.handleInputChange} />
      </form>
      <ul>
        {props.repos.map(repo => {
          return (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RepoSearch;
