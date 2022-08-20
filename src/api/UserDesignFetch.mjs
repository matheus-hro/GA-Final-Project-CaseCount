export {create, index}

async function create (newUserDesign){
    const jwt = localStorage.getItem('token');
    try{
    const fetchResponse = await fetch('api/user-design', {
        method: 'POST',
        headers:{'Content-Type':'application/json', 'Authorization':'Bearer ' + jwt},
        referrerPolicy:'origin',
        body:JSON.stringify(newUserDesign)
    });
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
        return await fetchResponse.json()
    }catch(err){
        return ("Caught error when posting custom design: ", err)
    }
}

async function index(){
    const jwt = localStorage.getItem('token');
    try{
    const fetchResponse = await fetch('api/user-design', {
        method: 'GET',
        headers:{'Content-Type':'application/json', 'Authorization':'Bearer ' + jwt},
        referrerPolicy:'origin',
    });
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
        return await fetchResponse.json()
    }catch(err){
        console.log("Caught error when fetching user design: ", err)
        return []
        
    }
}