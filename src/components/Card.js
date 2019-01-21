import React, { Component } from 'react';


/**
 * This component displays each saved bitlink 
 * @param  props 
 */
const Card = (props) => {

    return (

        <div className="col-md-12">
            <p style={{padding:'10%', backgroundColor:'#fff',marginBottom:10, textAlign:'center'}}>
                <a href={"https://"+props.item.value} target="_blank">
                    <img src="/extras/image/check.png" style={{width:25}} />  {props.item.id}  || {props.item.value}
                </a> 
            </p>      
        </div>    
          
    );
  
}

export default Card;

