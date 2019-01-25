document.addEventListener("DOMContentLoaded", () => {
let beerURL = 'http://localhost:3000/beers'
// let beerDetail = document.getElementClassName("list-group-itemcl")
let ul = document.getElementById('list-group')
let beerId


function fetchBeer(){
  fetch(beerURL)
  .then(res => res.json())
  .then(beers => beers.forEach(displayBeer))
};

function displayBeer(beer){
let ul = document.getElementById('list-group')
let li = document.createElement('li')
li.classList.add('list-group-item')
ul.appendChild(li)
li.innerText = beer.name
li.dataset.id = beer.id
};

ul.addEventListener('click',showBeer)

function showBeer(e){
  beerId = e.target.dataset.id
fetch(`${beerURL}/${beerId}`)
.then(res => res.json())
.then(beerInformation => beer(beerInformation))
};

function beer(beerInformation){
let div = document.getElementById('beer-detail')
// let h1 = document.createElement('h1')
// let h3 = document.createElement('h3')
// let img = document.createElement('img')
// let textArea = document.createElement('textarea')
// let btn = document.createElement('button')
// btn.classList.add('btn-info')
// btn.id = "edit-beer"
// img.setAttribute('src',beer.image_url)
// console.log(beerInformation)
div.innerHTML = `<h1>${beerInformation.name}</h1>
<img src="${beerInformation.image_url}">
<h3>${beerInformation.tagline}</h3>
<textarea>${beerInformation.description}</textarea>
<button id="edit-beer" class="btn btn-info">
  Save
</button>`
};

document.addEventListener('submit', editBeer)

function editBeer(e){
if (event.target.id == 'edit-button')
  fetch(`${beerURL}/${beerId}`,{
      method: "PATCH",
      headers: {
          "Content-type": 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({description: patchedInfo})
  }).then(res => res.json())
  .then(console.log)
}

























  fetchBeer()
})
