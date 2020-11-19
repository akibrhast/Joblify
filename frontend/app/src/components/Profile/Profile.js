import React from 'react';
import PageLayout from '../PageLayout'
import { useEffect, useState } from "react";
import JoblyApi from '../../services/JoblyApi'
import ProfileCard from './ProfileCard';



function Profile(){
    const [response, setResponse] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const get_data = async() =>{
            const result = await JoblyApi.getUserInfo(localStorage.getItem("user"));

            const user_profile = <ProfileCard profile={result} key={result.id}/>
        
            setResponse(user_profile);
            setLoading(false)
        }
        get_data();
    },[]);
    if(loading){
        return(<PageLayout loading={true}/>)
    }
    return(<PageLayout profile={ response }/>            );  

}

export default Profile;