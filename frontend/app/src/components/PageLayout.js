import React from 'react';

 
function PageLayout(props) {
    if(props.loading){
        return(
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                <   span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col search-container">
                    {props.search? props.search:""}
                </div>
            </div>
            <div className="row">
                <div className="col list-container">
                    {props.listcontainer?props.listcontainer:""}
                </div>
            </div>
        </div>
    )
}
export default PageLayout