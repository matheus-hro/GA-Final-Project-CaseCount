export {login, create}

async function login (newUser){
    try {
        let fetchResponse = await fetch("/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(newUser)
        })
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
        let token = await fetchResponse.json();
        localStorage.setItem('token', token);
        return true;        
    }catch(err){
        console.log("Error when fetching user: ", err)
        return false;       
    }
}

async function create (newUser){
    try {
        const fetchResponse = await fetch('/api/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
        const signupStatus = await fetchResponse.json()
        console.log(signupStatus);
        return true;
    } catch(err) {
        console.log("Error when registering user: ", err)
        return false;
    }
}