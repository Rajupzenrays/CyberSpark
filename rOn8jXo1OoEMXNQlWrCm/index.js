// Write Javascript Here
const baseUrl = "http://localhost:3000/users";
const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

getUsersRequest().then((users) => {
  //This function has been implemented already for you
  const tableEl = document.getElementById("table");
  for (const user of users) {
    tableEl.appendChild(createTableRow(user));
  }
});

function addNewUser() {
  //TODO: Implement me
  var data = prompt("Enter your name");
  //   console.log(data)

  var table = document.getElementById("table");
  console.log(table);
  var row = table.insertRow(1);
  var cell1 = row.insertCell();
  var cell2 = row.insertCell(1);
  cell1.innerHTML = data;
  cell2.innerHTML = `<button onclick=${"editUser()"}>Edit</button><button onclick=${"deleteUser(this)"}>Delete</button>`;
}

function editUser(id, userName) {
  //TODO: implement me
  var data = prompt("Enter your name to update");
  alert("clicked");
}

function deleteUser(r) {
  //TODO: implement me
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}

//CRUD HELPER METHODS
function createUserRequest(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

function getUsersRequest() {
  return fetch(baseUrl, {
    method: "GET",
  }).then((response) => response.json());
}

function deleteUserRequest(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

function updateUserRequest(user) {
  return fetch(`${baseUrl}/${user.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

//HELPER METHODS
function createTableRow(user) {
  var tr = document.createElement("tr");
  tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(${user.id})">Delete</a></td>`;
  return tr;
}
