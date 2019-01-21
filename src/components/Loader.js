import React from 'react';


/**
 *This component is used to show a loader
 *whenever an async call is in progress 
 */
const Loader = () => {
  return(
    <center style={{padding:40}}>
        <img src="/extras/image/loading.gif" style={{width:100}} />
    </center>
  );
}

export default Loader;