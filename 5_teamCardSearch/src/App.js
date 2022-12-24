import Header from "./components/Header.js";
import Content from "./components/Content.js";
import SearchBar from "./components/SearchBar.js";
import data from "./data/teamInfo.json";
import { useState } from "react";

const App = () => {

    const[filterTeam,setFilterTeam] = useState(data);
  return (
    <>
      <Header />
      <SearchBar  setFilterTeam={setFilterTeam} />
      <Content filterTeam={filterTeam} />
    </>
  );
};

export default App;
