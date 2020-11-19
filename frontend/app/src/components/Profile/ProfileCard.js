import Card from 'react-bootstrap/Card'

function ProfileCard (props){
    return(
      <Card className="mb-5" bg="dark" text="white" id={props.profile.user.username}>
      <Card.Body>
        <Card.Title>{props.profile.user.username}</Card.Title>
          <p>First Name :  {props.profile.user.first_name}</p>
          <p>Last Name  :   {props.profile.user.last_name}</p>
          <p>Email  :   {props.profile.user.email}</p>
          <p>Last Name  :   {props.profile.user.last_name}</p>
          {/* <p>Photo Url :   {props.profile.user.photo_url}</p>
          <p>Photo Url :   {props.profile.user.jobs}</p> */}

      </Card.Body>
    </Card>);
  };
  
  export default ProfileCard;