import { useState  } from "react";
import data from "../data/teamInfo.json";
import "../style.css";

const searchTeam = (searchText) =>{
return data.filter((team)=>team.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
}
const SearchBar = ({setFilterTeam}) => {
    const[searchText,setSearchText] = useState("ayush")
    // const SearchText =  "team search"
    
  return (
    <div className="team-Search">
      <form onSubmit={
        (e)=>{
            e.preventDefault();
          const filterTeam=  searchTeam(searchText)
          setFilterTeam(filterTeam)
        }
      }>
        <input 
         placeholder="Enter Team Name"
          value={searchText}
          onChange = {(e)=>{
                setSearchText(e.target.value);
            }} 
            ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;