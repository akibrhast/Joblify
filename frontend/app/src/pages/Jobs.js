import JobCard from "../components/JobCard"
import Container from 'react-bootstrap/Container'
import JoblyApi from '../services/JoblyApi'

import { useEffect, useState } from "react";


function  Jobs() {
    const [response, setResponse] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const get_data = async() =>{
            const result = await JoblyApi.getJobs();
            const result_list = result.map((r) => 
                <JobCard job={r} key={r.id}/>
            )
            setResponse(result_list);
            setLoading(false)
        }
        get_data();
    },[]);
    if(loading){
        return(<h1>It is loading</h1>)
    }
    return(
        <Container fluid  className="mt-5">
        {response}
        </Container>
        );


    
}

export default Jobs