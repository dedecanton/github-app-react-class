import React from 'react';

const UserInfo = ({userInfo}) => {
  return (
    <div className="user-info">
      <img src={userInfo.photo} alt="" />
      <h1>
        <a target='_blank' rel='noreferrer' href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a> 
      </h1>

      <div className="repos-info">
        <li>Repositórios: {userInfo.repos}</li>
        <li>Seguidores: {userInfo.followers}</li>
        <li>Seguindo: {userInfo.following}</li>
      </div>
    </div>
  );
};

export default UserInfo;

