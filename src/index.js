const BASE_URL = "http://localhost:3000/";
const dog_image_url = "https://curriculum-content.s3.amazonaws.com/js/woof-woof/";

// 1. Get the relevant data

function getPups() {
    const url = `${BASE_URL}pups`;
    return fetch(url)
    .then(resp => resp.json())
    // .then(data => console.log(data));
     
}
function getPupsPics() {
    const url = `${dog_image_url}`
}

// 2. Create a component with the data

/* <div id="dog-bar">
<span id="dog-bar">Dog Name1</span>
<span id="dog-bar">Dog Name2</span>
<span id="dog-bar">Dog Name3</span>
</div>
*/

function createPupDivBar(pupObj) {
    const div1 = document.createElement('dog-bar');
    span = document.createElement('span');

    span.textContent = pupObj.name;
    div1.appendChild(span);
    return div1;
}
   function createPupDiv(pupObj) {
const div2 = document.createElement('dog-info');
img = document.createElement('img'),
h2 = document.createElement('h2'),
button = document.createElement('butoon');

img.src = pupObj.dog_image_url;
h2.textContent = pupObj.name;
return div2;
}

const testpups = {
    "id": 3,
"name": "Skittles",
"isGoodDog": true,
"image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
}
  
createPupDivBar(testpups);