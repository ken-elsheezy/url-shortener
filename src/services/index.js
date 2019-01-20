


export const addLink = (linkObject) => {
    let id = linkObject.long_url;
    let value = linkObject.short_url;

    if(localStorage.getItem('store')){
        localStorage.setItem('store', '[]');
    }

    const storage  = localStorage.getItem('store');
    const jStorage = JSON.parse(storage);
    const index = jStorage.map((item) => {
        return item.id;
    }).indexOf(id);

    if(index === -1){
        //dosent exist so create one
        jStorage.push(linkObject);
    }else{
        //exists, send feed back message

    }
}


export const getLinks = () => {
    
}