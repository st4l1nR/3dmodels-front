const API_URL = "http://localhost:8080";
const MODEL_BASE_URL = "https://3dviewer.net/index.html";
document.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target))
  fetch(`${API_URL}/model`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
    });
    console.log(data)
  window.location.href = `${MODEL_BASE_URL}#model=${data.modelUrl}`
});
