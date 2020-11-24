
import Card from 'react-bootstrap/Card'

function CompanyCard (props){
  const boxStyle = {boxShadow: "2px 2px 6px 3px #121252", background:"#131619"}

  const company_jobs_url = `/companies/${props.company.handle}`
  return(
    <Card className="mb-5 text-white" id={props.company.handle} style={boxStyle}>
    <Card.Body>
      <Card.Title>{props.company.name} </Card.Title>
        <p>{props.company.description}</p>
        <a href= {company_jobs_url} className="stretched-link"></a>
    </Card.Body>
  </Card>);
};

export default CompanyCard;