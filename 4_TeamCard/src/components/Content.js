import data from "../data/teamInfo.json";
import Card from "./Cards";
import "../style.css";

const Content = () => {
  return (
    <>
      <marquee>
        <h1 className="card-heading">
          Team <span style={{ color: "brown" }}>C</span>
        </h1>
      </marquee>
      
          <Card teamData={data}/>
    
    </>
  );
};

export default Content;
