import React, { Component } from 'react';


/**
 * This is a component for displaying a message
 * in a padded div
 * @param  props.text (String) to be displayed 
 */
const Placeholder = (props) => {

    return (
        <div className="col-md-12">
            <p style={{padding:'10%',backgroundColor:'#fff', textAlign:'center'}}>
                {props.text}  
            </p>      
        </div>        
    );
  
}

export default Placeholder;

