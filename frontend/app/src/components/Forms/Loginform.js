import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import NavigationBar from '../NavigationBar'
import {useHistory} from 'react-router-dom'

import JoblyApi from '../../services/JoblyApi';


export default function LoginForm(){
    let history = useHistory();


    const { register, handleSubmit, errors } = useForm();
    const [apierror, setError] = useState(null);

    const onSubmit = async data => {
        try {
            const token = await JoblyApi.login(data);
            localStorage.setItem('_token', token);
            localStorage.setItem('user',data.username);
            history.push("/")

        }
        catch(err){
                setError(err)
                console.log(err)
        }
    }
  return(
      
    <React.Fragment>
        
        <NavigationBar/>
        <div className="container mt-5">
    <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
            <h1 className="">Login</h1>
            <div className="px-2">
                <form action="" className="justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className="sr-only">Username</label>
                        <input name="username" type="text" className="form-control" placeholder="username" ref={register({ required: true })}/>
                        {errors.username && "Username is required"}
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Password</label>
                        <input name="password" type="password" placeholder="password" className="form-control" ref={register({ required: true })}/>
                        {errors.password && "Password is required"}
                    </div>
                    <div className="apiErrors">
                    <p class="text-danger">{ apierror}</p>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>

                </form>
            </div>
        </div>
    </div>
</div>
    </React.Fragment>

  )
}