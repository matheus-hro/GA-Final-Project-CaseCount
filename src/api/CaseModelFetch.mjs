export {index}

/*async function index(){
    try{
      const fetchResponse = await fetch('api/case-models', {
        method: 'GET',
        headers:{'Content-Type':'application/json'},
        referrerPolicy:'origin'
      });
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
      const caseModels = await fetchResponse.json();
      return caseModels;
    }catch(err){
      console.log("Caught error when fetching case models: ", err);
      return []
    }
  }*/

  async function index() {
    try {
      const fetchResponse = await fetch('stripe/products', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        referrerPolicy: 'origin'
      });
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
      const caseModels = await fetchResponse.json();
      return caseModels;
    } catch (err) {
      console.log("Caught error when fetching stripe products: ", err);
      return []
    }
  }