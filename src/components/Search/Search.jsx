

const Search = ({handleSearch}) => {
  return (
    <div className="search">
      <input
        type="search"
        name="user"
        id=""
        placeholder="Digite o nome do usuário no GitHub"
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default Search