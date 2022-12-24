import "../style.css";
import Content from "./Content";
// import data from "../data/teamInfo.json";

const card = ({filterTeam}) => {
    // const { teamData } = props;
  return (
    <>
      <div className="card-container">
        <div className="card-info">
          {
          filterTeam.map((teamMember) => (
            <div className="team-info">
              
                <div className="card-image">
                <img id="card-team-img" src={teamMember.photo} alt="" />
                </div>
             
              <p>Hi, I am {teamMember.name}</p>
              <p>
                <b>Location : </b>
                {teamMember.place}
              </p>
              {teamMember.Company ? (
                <p>
                  <b>Company : </b>
                  {teamMember.Company}
                </p>
              ) : (
                <p>
                  <b>College : </b>
                  {teamMember.College}
                </p>
              )}

              <p>
                <b>Designation :</b>
                {teamMember.Designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default card;
