
import teamLogo from '../assets/teamlogo.png '
import "../style.css"
const header = () =>{
    return(
<div className='header-container'>
       <img id = "header-logo"src={teamLogo} alt="Team-Logo" />
         </div>
    ) ;
    
    
    }

export default header;