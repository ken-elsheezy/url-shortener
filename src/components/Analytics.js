import React, { Component } from 'react';
import Clicks from './Clicks';
import GeneralInfo from './GeneralInfo';


/**
 * This component displays the entire analytics section
 * @param props 
 */
const Analytics = (props) =>{

    return (
      <div className="col-md-12">
        <Clicks bitlink={props.bitlink} /> 
        <GeneralInfo bitlink={props.bitlink} />        
      </div>          
    );
  
}

export default Analytics;
