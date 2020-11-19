import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


 


class SearchForm extends React.Component {

    render(){
        return(

            <Form>
                <Form.Group controlId="generic-search">
                <Form.Control placeholder="Search..." />
                </Form.Group>
            </Form>
        )
    }
}

export default SearchForm;