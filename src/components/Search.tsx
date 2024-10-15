type SearchProps = {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetUsers: () => void;
};

const Search: React.FC<SearchProps> = ({ handleOnChange, handleGetUsers }) => {
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          onChange={handleOnChange}
        />
        &nbsp;<button onClick={handleGetUsers}>Search</button>
      </div>
    </section>
  );
};

export default Search;
