import React from 'react';


const Repositories = ({classname,title, repos}) => {
  return (
    <div className={classname}>
      <ul>
        <h2>{title}</h2>

        {repos.map((repo) => (
          <li key={repo.id}><a href={repo.link}>{repo.name}</a></li>
        ))}
      </ul>
    </div>
  );
};


export default Repositories;
