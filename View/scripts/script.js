const tasksEndpoint = "http://localhost:8080/task/user";

function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

function show(tasks) {
  let tab = `<thead>
            <th scope="col">#</th>
            <th scope="col">Description</th>
        </thead>`;

  for (let task of tasks) {
    tab += `
            <tr>
                <td scope="row">${task.id}</td>
                <td>${task.description}</td>
                <td><button type="button" id="requestBtn2" class="btn btn-outline-dark" onclick="deleteTask(${task.id})">
                Delete
              </button></td>
            </tr>
        `;
  }

  document.getElementById("tasks").innerHTML = tab;
}

function logout(){
  localStorage.clear();
  window.location = "/view/login.html";
}

async function deleteTask(taskId){
  let key = "Authorization";
  const response = await fetch("http://localhost:8080/task/" + taskId , {
    method: "DELETE",
    headers: new Headers({
      Authorization: localStorage.getItem(key),
    }),
  });
  getTasks();
}

async function getTasks() {
  let key = "Authorization";
  const response = await fetch(tasksEndpoint, {
    method: "GET",
    headers: new Headers({
      Authorization: localStorage.getItem(key),
    }),
  });

  var data = await response.json();
  console.log(data);
  if (response) hideLoader();
  show(data);
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (!localStorage.getItem("Authorization"))
    window.location = "/view/login.html";
});

getTasks();