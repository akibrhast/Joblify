
import Card from 'react-bootstrap/Card'

function CompanyCard (props){
  const company_jobs_url = `/companies/${props.company.handle}`
  return(
    <Card className="mb-5" bg="dark" text="white" id={props.company.handle}>
    <Card.Body>
      <Card.Title>{props.company.name} </Card.Title>
        <p>{props.company.description}</p>
        <a href= {company_jobs_url} className="stretched-link"></a>
    </Card.Body>
  </Card>);
};

export default CompanyCard;