let url = `https://dog.ceo/api/breeds/image/random`;

function getDogPhoto(){

  fetch(url)
    .then((response) => response.json())
    .then((data) => addImg(data))
    .catch((error) => console.log(error))
}

let addImg = (imgData) => {
  let li = document.createElement("li");
  let img =document.createElement("img");
  img.src = imgData.message;
  li.appendChild(img);
  let ul = document.getElementById("img-list");
  ul.appendChild(li);
}