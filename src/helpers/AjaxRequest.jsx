export const AjaxRequest = async (url, type, data = {}, files = false) => {
    let isLoading = true;
    let response = null;
    let options = {};
    if (type == "POST" || type == "UPDATE") {        
        if(files){
            options = {
                method: type,
                body: data                
            }
        }else{
            options = {
                method: type,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        }        
    } else {
        options = {
            method: type
        }
    }
    try {
        let request = await fetch(url, options);
        response = await request.json();
    } catch (error) {
        response = null;
    }

    return {
        response,
        isLoading
    }
}