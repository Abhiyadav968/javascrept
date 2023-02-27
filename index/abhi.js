var form = `<div>
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name">
</div>
<div class="form-group mt-3">
  <label for="email">Email</label>
  <input type="email" class="form-control" id="email"name:name.value; placeholder="Enter Your Email">
</div>

<button type="submit" class="btn btn-primary" onclick="save()">Submit</button>
</div>`;

 let ditails = [];

function save() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let data = {
    name: name.value,
    email: email.value,
  };
  ditails.push(data);
  console.log(ditails);
};

document.getElementById("form").innerHTML = form;