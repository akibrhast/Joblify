import React from 'react';
import { useForm } from "react-hook-form";


 

export default function SearchForm(props){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        props.setSearchKey(data.search);
        //console.log(data);
        //call jobs api with search input
        //refresh job component with only search input
        }

        return(
            <form  action=""  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="sr-only">search</label>
                    <input name="search" type="text" className="form-control" placeholder={props.searchPlaceHolder} ref={register({ required: true })}/>
                </div>
            </form>

        )
    
}
