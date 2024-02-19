
async function loginAction() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "") {
      alert("Username can't be empty!");
      document.getElementById("password").value = "";
      return;
    }
    else if(password == "") {
      alert("Password can't be empty");
      return;
    }

    let connectResult = await connect(generateUUID())
    console.log(connectResult)

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
  
function generateUUID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}