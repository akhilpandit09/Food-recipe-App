const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}
// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=e2de69da&app_key=f58331c4868093d38a6d537445c783e2

export const fetchData = async (defaultQuery) => {
    const {app_id, app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const respone = await data.json();
        return respone;

    } catch (e) {
        console.log(e,'something went wrong');
        return e;
    }
}


export const fetchTabData = async (defaultQuery) => {
    const {app_id, app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);
        const respone = await data.json();
        return respone;
        
    } catch (e) {
        console.log(e,'something went wrong');
        return e;
    }
}