import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions from "../Actions";
import Repositories from "../Repositories/Repositories";

const AppContent = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching
}) => {
  return (
    <div className="app">
      <Search handleSearch={handleSearch} isDisabled={isFetching}/>

      {isFetching && <div>Carregando</div>}
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length && (
        <Repositories classname={"repos"} title="Repositórios:" repos={repos} />
      )}

      {!!starred.length && (
        <Repositories
          classname={"starred"}
          title="Favoritos:"
          repos={starred}
        />
      )}
    </div>
  );
};

export default AppContent;
