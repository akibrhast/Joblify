
import Card from 'react-bootstrap/Card'
import JoblyApi from '../../services/JoblyApi'
import { useState } from "react";


 
function JobCard (props){
  const boxStyle = {boxShadow: "2px 2px 6px 3px #121252", background:"#131619"}
  const [jobstate, setJobState] = useState(props.job.state);
  const buttonClass = `font-weight-bold text-uppercase float-right btn btn-${jobstate?"secondary":"primary"}` 


  async function ApplyJob(id){
    try{
      console.debug(id)
      let message = await JoblyApi.applyJob(id);
      setJobState(true)
      console.debug(message)
    }
    catch(err){
      console.error(err)

  }


  }
  return(
    <Card className="mb-5 text-white" id={props.job.id} style={boxStyle}>
      <div class="card-header border-white text-capitalize"> {props.job.title} | {props.job.company_handle} </div>
    <Card.Body>
        {props.job.salary && <p>Salary:{props.job.salary}</p> }
        {props.job.equity && <p>Equity:{props.job.equity}</p> }
        <button onClick={() => ApplyJob(props.job.id)} 
                disabled={jobstate} 
                type="button" 
                className={buttonClass}> 
                  {jobstate? "Applied":"Apply"} 
        </button>
    </Card.Body>
  </Card>);
};

export default JobCard;