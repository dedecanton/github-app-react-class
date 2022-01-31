import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions from "../Actions";
import Repositories from "../Repositories/Repositories";

const AppContent = () => {
  return (
    <div className="app">
      <Search />
      <UserInfo />
      <Actions />

      <Repositories
        classname={"repos"}
        title="Repositó rios:"
        repos={[
          {
            name: "Nome do repositorio",
            link: "https://www.google.com",
          },
        ]}
      />

      <Repositories
        classname={"starred"}
        title="Favoritos:"
        repos={[
          {
            name: "Nome do repositorio",
            link: "https://www.google.com",
          },
        ]}
      />
    </div>
  );
};

export default AppContent;
