import JobCard from "../Job/JobCard"
import JoblyApi from '../../services/JoblyApi'
import { useParams } from "react-router-dom";


import { useEffect, useState} from "react";
import PageLayout from "../PageLayout";


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
        return(<PageLayout loading={true}/>)
    }
    return(
        <PageLayout
            listcontainer = {response}
        />

        );


    
}

export default Company