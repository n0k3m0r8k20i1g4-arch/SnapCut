const API_URL = "http://localhost:3000";

async function upload() {
  const fileInput = document.getElementById("fileInput");
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  const res = await fetch(API_URL + "/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  console.log(data);
}

async function generate() {
  const text = document.getElementById("textInput").value;

  const res = await fetch(API_URL + "/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  const video = document.getElementById("video");
  video.src = data.preview;
}
