console.log("fish");

let linkList = "https://picsum.photos/v2/list?page=1&limit=64?grayscale";
let link = "https://picsum.photos/";
const output = document.querySelector(".output");
fetch(linkList)
    .then((response) => response.json())
    .then((pictures) => {
        pictures.forEach((element) => {
            output.innerHTML += `<div class="tile">
          <img src="${element.download_url}"></img>
          <h2>${element.author}</h2>
          <a href="${element.url}" class="button">Click to see more</a>
          </div>
          `;
        });
    })
    .catch((errorMsg) => console.log("Something wrong", errorMsg));
