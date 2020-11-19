import React from "react";
import { useForm } from "react-hook-form";

import JoblyApi from '../../services/JoblyApi';



export default function RegistrationForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    const token = JoblyApi.register(data);
      
    };

  //console.log(watch()); // watch input value by passing the name of it

  return (
    <div className="container">
    <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
            <h1 className="">Registration</h1>
            <div className="px-2">
                <form action="" className="justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className="sr-only">Username</label>
                        <input name="username" type="text" className="form-control" placeholder="username" ref={register({ required: true })}/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Password</label>
                        <input name="password" type="password" className="form-control" placeholder="password" ref={register({ required: true })}/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only">First Name</label>
                        <input name="first_name" type="text" className="form-control" placeholder="firstname" ref={register({ required: true })}/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Last name</label>
                        <input name="last_name" type="text" className="form-control" placeholder="lastname" ref={register({ required: true })}/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Email</label>
                        <input name="email" type="text" className="form-control" placeholder="email" ref={register({ required: true })}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                </form>
            </div>
        </div>
    </div>
</div>


  );
}