let form = `
<div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name">
  </div><br>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter your Email">
  </div><br>
  <button type="submit" class="btn btn-primary" onclick="save()">Submit</button>
</div>`
detalis = [];
getData();
// 2

table();


/////////////////////////////////////

function save() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if (name.value == 0) {
        alert("Name is empty")
        return;
    }

    // console.log(name.value)
    // console.log(email.value)

    let data = {
        name: name.value,
        email: email.value,
    };
    detalis.push(data)
    setData();
    console.log(detalis)
    table();
    name.value = "";
    email.value = "";
};

document.getElementById("form").innerHTML = form;

function table() {

    let table = `
    <table class="table">
        <thead>
            <tr>
                <th class="col-1">NO</th>
                <th class="col-3">Name</th>
                <th class="col-4">Email</th>
                <th class="col-2">Edit</th>
                <th class="col-2">Delete</th>
            </tr>
        </thead>
        <tbody>`;

    for (let i = 0; i < detalis.length; i++) {
        table = table + `
        <tr>
            <th>${i + 1}</th>
            <td>${detalis[i].name}</td>
            <td>${detalis[i].email}</td>
            <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
            <td><button type="button" class="btn btn-danger" onclick="deletedata(${i})">Delete</button></td>
        </tr> `
    };
    table = table + ` </tbody >
    </table >`;
    document.getElementById("table").innerHTML = table;
}

// Delete data //3

function deletedata(index) {

    detalis.splice(index, 1)
    setData();
    table();
    console.log('delete work')
    console.log(detalis)
};

// Edit data //4

function edit(index) {

    let editForm = `
        <div>
            <div class="form-group">
                <label for="name">Update Name</label>
                <input type="text" value = "${detalis[index].name}" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Update your name">
            </div><br>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" value = "${detalis[index].email}" class="form-control" id="newEmail" placeholder="Update your Email">
            </div><br>
            <button type="submit" class="btn btn-primary" onclick="update(${index})">Update</button>
        </div>`;

    document.getElementById("form").innerHTML = editForm;
    console.log('edit Work');
}

// Update info

function update(index) {
    let newName = document.getElementById("newName")
    let newEmail = document.getElementById("newEmail")

    detalis[index] = {
        name: newName.value,
        email: newEmail.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;

    console.log('Update Work');
    console.log(detalis);
};

//
function getData() {
    let Data = localStorage.getItem("details");
    if (Data) {
        detalis = JSON.parse(Data);
    } else {
        setData();
    };
};

function setData() {
    localStorage.setItem("detalis", JSON.stringify(detalis));
}
