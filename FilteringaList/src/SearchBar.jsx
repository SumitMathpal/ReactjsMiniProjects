import styles from "./Filter.module.css";

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{" "}
      <input
        type="search"
        value={query}
        onChange={onChange}
        className={styles.searchBar}
      />
    </label>
  );
}

export default SearchBar;
