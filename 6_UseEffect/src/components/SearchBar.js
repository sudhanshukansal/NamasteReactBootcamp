import { useState  } from "react";
import "../style.css";

const searchTeam = (searchText,setFilterTeam) =>{
  console.log
console.log(setFilterTeam[0]);
return setFilterTeam.data.filter((team)=>team.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
}
const SearchBar = ({setFilterTeam}) => {
    const[searchText,setSearchText] = useState("")
   console.log("search execute")
    console.log(setFilterTeam[0])

  return (
    <div className="team-Search">
      <form onSubmit={
        (e)=>{
            e.preventDefault();
          const filterTeam=  searchTeam(searchText,setFilterTeam)
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