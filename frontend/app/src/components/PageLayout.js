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
        <div className="container">
            {props.search &&          
                <div className="row">
                    <div className="col search-container">
                        {props.search}
                    </div>
                </div>
            }

            {props.listcontainer &&
                <div className="row">
                    <div className="col list-container">
                        {props.listcontainer}
                    </div>
                </div>
            }
            {props.profile &&
            <div className="row">
                <div className="col profile-container">
                {props.profile}
                </div>
            </div>
            }

        </div>
    )
}
export default PageLayout