import "../style.css";
import Content from "./Content";
// import data from "../data/teamInfo.json";

const card = ({filterTeam}) => {
  console.log(filterTeam)
  return (

    <>
      <div className="card-container">
        <div className="card-info">
          {
          filterTeam.map((teamMember) => (
            <div className="team-info">
              
                <div className="card-image">
                <img id="card-team-img" src={teamMember.avatar_url} alt="" />
                </div>
             
              <p>Hi, I am {teamMember.name}</p>
              <p><b>Git_id :</b> {teamMember.id}</p>
              <p>
                <b>Location : </b>
                {teamMember.location}
              </p>
              {teamMember.company ? (
                <p>
                  <b>Company : </b>
                  {teamMember.company}
                </p>
              ) : (
                <p>
                  <b>College : </b>
                  {teamMember.College}
                </p>
              )}
              <form onSubmit={teamMember.html_url}>
              <button>Open Github</button>
              </form>
             

              
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default card;
