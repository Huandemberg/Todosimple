async function newTask(){
    let description = document.getElementById("description").value;
    let key = "Authorization";
    console.log(description);

    const response = await fetch("http://localhost:8080/task", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=utf8",
        Accept: "application/json",
        Authorization: localStorage.getItem(key),
      }),
      body: JSON.stringify({
        description: description,
        
      }),
    });

    if (response.ok) {
      showToast("#okToast");
    } else {
      showToast("#errorToast");
    }
  
    window.setTimeout(function () {
      window.location = "/view/index.html";
    }, 2000);

}

function showToast(id) {
  var toastElList = [].slice.call(document.querySelectorAll(id));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (!localStorage.getItem("Authorization"))
    window.location = "/view/login.html";
});