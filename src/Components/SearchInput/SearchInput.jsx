import { useContext } from "react";
import "./SearchInput.css";
import IconSearch from "/assets/icon-search.svg";
import { DataContext } from "../../Contexts/DataContext";

function SearchInput({ placeholder }) {
  const { setSearch } = useContext(DataContext);

  function handleEnterClick(e) {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  }
  return (
    <label className="search-input">
      <div className="icon">
        <img src={IconSearch} alt="search" />
      </div>
      <input
        className="txt-2-l"
        type="search"
        placeholder={placeholder}
        onKeyDown={handleEnterClick}
      />
    </label>
  );
}

export default SearchInput;
