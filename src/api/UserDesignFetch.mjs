export {create, index}

async function create (newUserDesign){
    try{
    const fetchResponse = await fetch('api/user-design', {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        referrerPolicy:'origin',
        body:JSON.stringify(newUserDesign)
    });
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
        return await fetchResponse.json()
    }catch(err){
        return ("Caught error when posting custom design: ", err)
    }
}

async function index(user){
    try{
    const fetchResponse = await fetch('api/user-design', {
        method: 'GET',
        headers:{'Content-Type':'application/json'},
        referrerPolicy:'origin',
        body:JSON.stringify(user)
    });
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
        return await fetchResponse.json()
    }catch(err){
        return ("Caught error when fetching user design: ", err)
    }
}