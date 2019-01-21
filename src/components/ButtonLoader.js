import React from 'react';


/**
 *This component is used to show a loader
 *inside a button when an async task 
 is in progress
 */
const ButtonLoader = () => {
  return(
        <img src="/extras/image/loading.gif" style={{width:25}} />
  );
}

export default ButtonLoader;