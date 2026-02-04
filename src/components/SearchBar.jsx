import React from "react";

import {useNavigate } from "react-router-dom";
export default function Searchbar() {
  const navigate = useNavigate();
  const [search, setSearch]=React.useState("");
  function handleSearch() {

    setSearch(search);
    navigate(`/search/${search}`);
  }

  return (
    <div>
      <input type="text" placeholder="Search movies..." onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>search</button>

    </div>
  );
}
