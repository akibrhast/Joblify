import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import {Redirect } from "react-router-dom";

import JoblyApi from '../../services/JoblyApi';


export default function LoginForm(){
    const { register, handleSubmit, errors } = useForm();
    const [apierror, setError] = useState(null);
    const onSubmit = async data => {
        try {
            const token = await JoblyApi.login(data);
            localStorage.setItem('_token', token);
            localStorage.setItem('user',data.username);      
        }
        catch(err){
                setError(err)
                console.log(err)
        }
    }



//   const onSubmit = async data => {

    // login
    // .then((e) => {
    //     console.log(e)
    //     if(e.token){
    //     localStorage.setItem('_token', e.token);
    // }})
    // .catch((err) =>{
    //     apiError = err[0]
    //     console.log("errors",err[0])
    // })
  


  return(
    <div className="container">
    <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
            <h1 className="">Login</h1>
            <div className="px-2">
                <form action="" className="justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className="sr-only">Username</label>
                        <input name="username" type="text" className="form-control" placeholder="JaneDoe74" ref={register({ required: true })}/>
                        {errors.username && "Username is required"}
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Password</label>
                        <input name="password" type="password" className="form-control" ref={register({ required: true })}/>
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
  )
}