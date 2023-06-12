"use strict"

const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.setRequestHeader("Content-Type", "multipart/form-data");
  xhr.upload.onprogress = function (e) {
    progress.value = e.loaded / e.total;
  }
  xhr.send(new FormData(form));
})
