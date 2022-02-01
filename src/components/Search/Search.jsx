

const Search = ({handleSearch, isDisabled}) => {
  return (
    <div className="search">
      <input
        type="search"
        name="user"
        id=""
        placeholder="Digite o nome do usuário no GitHub"
        onKeyUp={handleSearch}
        disabled={isDisabled}
      />
    </div>
  );
};

export default Search