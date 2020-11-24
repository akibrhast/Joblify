import React from 'react'
import Card from 'react-bootstrap/Card'


function ProfileCard (props){

  const jobArray = props.profile.user.jobs

    return(

    <React.Fragment>
      <div className="col">
      <Card className="mb-5  bg-dark text-white" id={props.profile.user.username} style={{width: "30rem;"}}>
      <Card.Body>
        <Card.Title>User Information</Card.Title>
          <img  src={`https://robohash.org/${props.profile.user.username}?set=set4&size=150x150`} alt="..."/>

          {/* <img src={`https://robohash.org/${props.profile.user.username}?set=set4`} alt="..." /> */}
          <ul className="list-group">
            <li class="list-group-item list-group-item-info">Username : {props.profile.user.username}</li>
            <li class="list-group-item list-group-item-info">First Name: {props.profile.user.first_name}</li>
            <li class="list-group-item list-group-item-info">Last Name: {props.profile.user.last_name}</li>
            <li class="list-group-item list-group-item-info">Email: {props.profile.user.email}</li>
          </ul>

      </Card.Body>
    </Card>
    </div>
    <div className="col">
      <div className="card  bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title">Applied Jobs</h5>
          <ul className="list-group">
            {jobArray.map((r)=>
              <li class="list-group-item list-group-item-success">{r.title}</li>
            )}
            

          </ul>
        </div>
      </div>



    </div>
    </React.Fragment>

    );
  };
  
  export default ProfileCard;