import CompanyCard from "./CompanyCard";
import JoblyApi    from '../../services/JoblyApi';
import PageLayout  from '../PageLayout';
import SearchForm  from "../Forms/SearchForm";



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


    const searchParam = (data) => {
        setLoading(true)
        const get_data = async() =>{
            const result = await JoblyApi.searchComnpanies(data);
            const result_list = result.map((r) => 
                <CompanyCard company={r} key={r.handle}/>
            )
            setResponse(result_list);
            setLoading(false)
        }
        get_data();

    }
    

    if(loading){
        return(<PageLayout loading={true}/>)
    }
    return(
        <PageLayout search={<SearchForm setSearchKey={(d) => searchParam(d)} 
                                        searchPlaceHolder="Search By Company Name..."/>}
                    listcontainer={response}/>
        );


    
}

export default Companies;