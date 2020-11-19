import JobCard from "./JobCard"
import JoblyApi from '../../services/JoblyApi'
import PageLayout from '../PageLayout'
import { useEffect, useState } from "react";
import SearchForm from "../Search";


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
        return(<PageLayout loading={true}/>)
    }
    return(
        <PageLayout
            search={
                <SearchForm/>
            }
            listcontainer={
                response
            }/>
            );    
}

export default Jobs