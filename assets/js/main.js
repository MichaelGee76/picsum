let linkList = "https://picsum.photos/v2/list?page=1&limit=32";
const output = document.querySelector(".output");
let btn = document.querySelector("button");
let page = 1;

function fetchIt() {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=32`)
        .then((response) => response.json())
        .then((pictures) => {
            pictures.forEach((element) => {
                output.innerHTML += `<div class="tile">
          <a href="${element.url}"><img src="${element.download_url}"></img></a>
          
          <h2>${element.author}</h2>
          <a href="${element.url}" class="button">Click to see more</a>
          </div>
          `;
            });
        })
        .catch((errorMsg) => console.log("Something wrong", errorMsg));
}

fetchIt(`https://picsum.photos/v2/list?page=${page}&limit=32`);

btn.addEventListener("click", () => {
    page++;
    output.innerHTML = "";
    fetchIt(`https://picsum.photos/v2/list?page=${page}&limit=32`);
});
