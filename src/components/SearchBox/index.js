import { ReactComponent as SearchIcon } from "./search-icon.svg";
import "./searchBox.css";


export default () => {
  return (
    <form style={{ display: "flex", minWidth: "568px" }}>
      <input
        placeholder="Search an album of your choice"
        style={{ flex: "1", borderRadius: "8px 0px 0px 8px", padding: "8px" }}
      />
      <button className="search">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  );
};
