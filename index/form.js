var form = `<div>
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name"  aria-describedby="emailHelp" placeholder="Enter your Name">
</div>
<div class="form-group mt-3">
  <label for="email">Email</label>
  <input type="email" class="form-control" id="email" placeholder="Enter your email">
</div>

<button type="submit" class="btn btn-primary mt-3" onclick="save()">Submit</button>
</div>`;

details = [];

function save() {
let name=document.getElementById("name");
let email=document.getElementById("email");

let data= {
  Name:name.value,
  Email:email.value,
}

details.push(data);
console.log(details);
}

document.getElementById('form').innerHTML = form;
