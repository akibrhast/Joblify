import React from 'react';
import NavigationBar from './NavigationBar'
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
    
        
        <React.Fragment>
            <NavigationBar/>
            <div className="container mt-5">
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
                {props.profile}
            </div>
            }

        </div>
            

        </React.Fragment>

    )
}
export default PageLayout