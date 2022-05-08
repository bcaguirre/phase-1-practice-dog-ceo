console.log('%c HI', 'color: firebrick')

function randomDogs() {
const imgURL = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgURL)
.then(resp => resp.json())
.then(dogs => addImg(dogs));
}
function addImg(images) {
    const insert = document.querySelector('div')
    images.message.forEach(Image => {
        const img = document.createElement('img');
        img.src = Image;
        insert.appendChild(img)
    });
}
document.addEventListener('DOMContentLoaded', () => {
    randomDogs()
})
async function breedList() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    addBreed(data.message)
}
breedList()

function addBreed(list) {
    document.getElementById("breed-dropdown").innerHTML = `
    <select onchange="breedSelect(this.value)">
        <option>choose a dog breed</option>
        ${Object.keys(list).map(function (breed) { 
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
}



/*function breedList() {
const breedURL = 'https://dog.ceo/api/breeds/list/all'
fetch(breedURL)
.then(resp => resp.json())
.then(list => {
    const dogBreeds = Oject.keys(list.message)
    addBreed(dogBreeds)
})
}
function addBreed(dogBreeds) {
    return dogBreeds.map((breed) => {
    //const ul = document.querySelector("#dog-breeds")
    let li = `<li>${breed}</li>`
    console.log(li)
    return li
})

document.addEventListener('DOMContentLoaded', () => {
    breedList()
})
}*/


