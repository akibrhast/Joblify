import JobCard from "../components/JobCard"
import Container from 'react-bootstrap/Container'
import JoblyApi from '../services/JoblyApi'
import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";


function  Company() {

    const {handle} = useParams();
    const [response, setResponse] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const get_data = async() =>{
            const result = await JoblyApi.getCompany(handle);
            const result_list = result.jobs.map((r) => 
                <JobCard job={r}/>
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

export default Company