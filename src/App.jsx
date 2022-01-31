import "./style.css";

import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Actions from "./components/Actions";
import Repositories from "./components/Repositories/Repositories";

function App() {
  return (
    <div className="app">
      <Search />
      <UserInfo />
      <Actions />

      <Repositories
        classname={"repos"}
        title="Repositórios:"
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
}

export default App;
