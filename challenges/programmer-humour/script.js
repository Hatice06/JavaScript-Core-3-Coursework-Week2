let url = `https://xkcd.now.sh/?comic=latest`;

function setup () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => addImg(data))
    .catch((error) => console.log(error));
}

let addImg = (imgData) => {
  let img = document.createElement("img");
  img.src = imgData.img;
  let imgDiv = document.querySelector("#img-container");
  imgDiv.appendChild(img);
};
window.onload = setup;
