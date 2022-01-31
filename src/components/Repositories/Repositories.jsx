import React from 'react';


const Repositories = ({classname,title, repos}) => {
  return (
    <div className={classname}>
      <ul>
        <h2>{title}</h2>

        {repos.map((repo,index) => (
          <li key={index}><a href={repo.link}>{repo.name}</a></li>
        ))}
      </ul>
    </div>
  );
};


export default Repositories;
