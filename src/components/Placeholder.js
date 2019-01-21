import React, { Component } from 'react';


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

