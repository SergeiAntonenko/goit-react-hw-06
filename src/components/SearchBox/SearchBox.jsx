import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleChangeSearch }) => {
  return (
    <div className={css["search"]}>
      <label className={css["search-label"]} htmlFor="search">
        {" "}
        Find contacts by name or phone number
      </label>
      <input
        className={css["search-input"]}
        id="search"
        type="text"
        value={searchValue}
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default SearchBox;
