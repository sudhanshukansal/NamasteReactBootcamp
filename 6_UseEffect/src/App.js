import Header from "./components/Header.js";
import Content from "./components/Content.js";
import SearchBar from "./components/SearchBar.js";
import { useState, useEffect } from "react";

const gitId = [
  "sudhanshukansal",
  "SumitARG",
  "Ehraz98",
  "aravindFrontEnd",
  "pandeymeenakshi",
  "ketanmalik",
];
const usersGitId = [];

const App = () => {
  const [filterTeam, setFilterTeam] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    for await (const id of gitId) {
      const data = await fetch(`https://api.github.com/users/${id}`);
      const json = await data.json();
      usersGitId.push(json);
    }

    setFilterTeam(usersGitId);
  }
console.log("")
  return (
    <>
      <Header />
      <SearchBar setFilterTeam={setFilterTeam} />
      <Content filterTeam={filterTeam} />
    </>
  );
};

export default App;
