function valuepass() {
  var nameina = document.getElementById('fname').value;
  var namein = document.getElementById('lname').value;
  var user = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

  let data = []

  let task = {
    name: nameina,
    lastN: namein,
    user: user,
    password: pass,
    email: email
  }
  data.push(task)

  console.log(data)
  let main = `<table border cellspacing = 0>`
  main = main + `<tr>
   <th>Frist Name</th>
   <th>Last Name</th>
   <th>UserName</th>
   <th>Email</th>
   <th>Password</th>
 </tr>`
  for (let i = 0; i < data.length; i++) {
    main = main + `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].lastN}</td>
        <td>${data[i].user}</td>
        <td>${data[i].email}</td>
        <td>${data[i].password}</td>
      </tr>`
  }
  main = main + `</table>`
  document.getElementById('table').innerHTML = main;
}
