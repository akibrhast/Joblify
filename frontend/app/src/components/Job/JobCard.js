
import Card from 'react-bootstrap/Card'

function JobCard (props){
  return(
    <Card className="mb-5" bg="dark" text="white" id={props.job.id}>
    <Card.Body>
      <Card.Title>{props.job.title} at <i>{props.job.company_handle}</i></Card.Title>
        <p>Salary:{props.job.salary}</p>
        <p>Equity:{props.job.equity}</p>

    </Card.Body>
  </Card>);
};

export default JobCard;