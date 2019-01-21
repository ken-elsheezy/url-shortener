
const checkStore = () => {
    if(!localStorage.getItem('store')){
        localStorage.setItem('store', '[]');
    }
    return;
}



const validate = (linkObject) =>{
    return linkObject.long_url && linkObject.short_url;
}



export const addLink = (linkObject) => {
    let id = linkObject.long_url;
    let value = linkObject.short_url;

    if(validate(linkObject)){
        checkStore ();
        const storage  = localStorage.getItem('store');
        const jStorage = JSON.parse(storage);
        const index = jStorage.map((item) => {
            return item.id;
        }).indexOf(id);

        if(index === -1){
            //dosent exist so create one
            jStorage.push(linkObject);
            localStorage.setItem('store', JSON.stringify(jStorage));
            return {
                status:'success', 
                msg:'Link record saved successfully'
            };
        }else{
            //exists, send feed back message
            return {
                status:'success', 
                msg:'You have previously saved this url'
            };
        }
    }else{
        return {
            status:'failed', 
            msg:'invalid links object provided, ensure you are passing a value'
        };
    }
}



export const getLinks = () => {

    checkStore ();

    const storage  = localStorage.getItem('store');
    const jStorage = JSON.parse(storage);
    return {
        status:'success', 
        msg:'Resources retrieved successfully',
        result: jStorage
    };
}