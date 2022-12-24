import Card from "./Cards";
import "../style.css";

const Content = ({filterTeam})=> {
  
  return (
    <>
      <marquee>
        <h1 className="card-heading">
          Team <span style={{ color: "brown" }}>C</span>
        </h1>
      </marquee>
                <Card filterTeam={filterTeam}/>
    
    </>
  );
};

export default Content;
