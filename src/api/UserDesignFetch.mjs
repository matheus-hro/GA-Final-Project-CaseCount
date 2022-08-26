export { create, index, destroy };

async function create(newUserDesign) {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    return false;
  }
  try {
    const fetchResponse = await fetch("api/user-design", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
      referrerPolicy: "origin",
      body: JSON.stringify(newUserDesign),
    });
    if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
    return true
  } catch (err) {
    console.log ("Caught error when posting custom design: ", err);
    return false
  }
}

async function index() {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    return [];
  }
  try {
    const fetchResponse = await fetch("api/user-design", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
      referrerPolicy: "origin",
    });
    if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
    return await fetchResponse.json();
  } catch (err) {
    console.log("Caught error when fetching user design: ", err);
    return [];
  }
}

async function destroy(id) {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      return [];
    }
    try {
      const fetchResponse = await fetch("api/user-design", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        referrerPolicy: "origin",
        body:JSON.stringify({id:id})
      });
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
      return true
    } catch (err) {
      console.log("Caught error when fetching user design: ", err);
      return false;
    }
}
