import { useState } from "react";
import FilterItems from "./FilterItems";
import SearchBar from "./SearchBar";
import List from "./List";
import foods from "./Foods";
import styles from "./Filter.module.css";
// import styles from "./Card.module.css";
// import Card from "./Card";

function App() {
  const [query, setQuery] = useState("");
  const results = FilterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={styles.container}>
    <SearchBar query={query} onChange={handleChange} />
    <List items={results} />
  
      
      {/* <Card title="card1" name={name} setName={setName} />
      <Card title="card2" name={name} setName={setName} />
      <p> Also Change Parent Component Value : {name}</p> */}
    </div>
  );
}

export default App;
