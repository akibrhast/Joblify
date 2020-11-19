import CompanyCard from "./CompanyCard";
import JoblyApi from '../../services/JoblyApi';
import PageLayout from '../PageLayout';
import SearchForm from "../Search";



import { useEffect, useState } from "react";


function  Companies() {
    const [response, setResponse] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const get_data = async() =>{
            const result = await JoblyApi.getCompanies();
            const result_list = result.map((r) => 
                <CompanyCard company={r} key={r.handle}/>
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

export default Companies;