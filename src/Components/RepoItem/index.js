import React from 'react';

const RepoItem = (props) => {
  const {
    name,
    fork,
    license,
    html_url,
    language,
    homepage,
    forks_url,
    pushed_at,
    created_at,
    updated_at,
    description,
    forks_count,
    stargazers_url,
    stargazers_count
  } = props.repo;

  return (
    <div className="RepoItem">
      <h4 className="title">{name}</h4>
      <p className="desc">{description}</p>
      <span className="language">{language}</span>
      <span className="homepage">{homepage}</span>
      <div className="tags">
        <ul className="tags-list"></ul>
      </div>

      <span className="created-at">{created_at}</span>
      <span className="updated-at">{updated_at}</span>
      <span className="pushed-at">{pushed_at}</span>

      <span className="forks-count">{forks_count}</span>
      <span className="stargazers_count">{stargazers_count}</span>
    </div>
  );
};

export default RepoItem;
