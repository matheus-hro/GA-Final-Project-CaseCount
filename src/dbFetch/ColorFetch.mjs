export {index}

async function index(){
    try{
      const fetchResponse = await fetch('api/colors', {
        method: 'GET',
        headers:{'Content-Type':'application/json'},
        referrerPolicy:'origin'
      });
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
      const colors = await fetchResponse.json();
      return colors;
    }catch(err){
      console.log("Caught error when fetching colors: ", err);
    }
  }