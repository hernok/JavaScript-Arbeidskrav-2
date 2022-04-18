const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let allCharacters = [];

searchBar.addEventListener("keyup", function(e){
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = allCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});	

function addStudent() {
	let inputName = document.getElementById("input-name")
	let inputHouse = document.getElementById("input-house")
	let inputAge = document.getElementById("input-age")
	let inputAlive = document.getElementById("input-alive")
	let inputImage = document.getElementById("input-image")

	if(inputName, inputHouse, inputAge, inputAlive, inputImage === ""){
	alert("Please fill out all the input fields")
	} else{	
		allCharacters.push({
		name: inputName.value,
		house: inputHouse.value,
		age: inputAge.value,
		alive: inputAlive.value,
		image: inputImage.value,
	});
	
}
	displayCharacters;
};

async function loadCharacters(characters){
    try {
        const res = await fetch("https://hp-api.herokuapp.com/api/characters");
        allCharacters = await res.json();
        displayCharacters(allCharacters);
    } catch (error) {
        console.error(error);
    }
};

function displayCharacters(characters){
	let characterAge = 2022 - characters.yearOfBirth;
	let characterAlive = characters.alive;
	console.log(characters.yearOfBirth)
/*
    for (let i = 0; i < characters.length; i++) {
        let character = characters[i];
        if (character.image === "") {
          character.image = "/assets/global/defaultimage.png";
        }
*/
    const htmlString = characters.map((character) => {
            return `
            <li class="hp_characters">
                <h3 class="name">${character.name}</h3>
                <p class="house">House: ${character.house}</p>
				<p class="age">Age: ${characterAge}</p>
				<p class="alive">This character is ${characterAlive}</p>
                <img class="image" src="${character.image}"></img>
            </li>
        `;
        }).join('');
    charactersList.innerHTML = htmlString;

	if (characterAge = ""){
		"uvisst."
	}else {
		characterAge - 2022
 };

	if (characterAlive === "true"){
		"Character is alive."
	} else{
		"Character is dead."
	};

	if(characters.image === ""){
		allCharacters.push(`<img class ="default-image" src="/assets/global/defaultimage.png"></img>`)
	}
};

loadCharacters();




/*
'<img class ="default-image" src="/assets/global/defaultimage.png"></img>'
if(hogwartsStudent == "false"){
	
}else{
	displayCharacters
}

async function updateCharacterList() {
	const res = await fetch('http://hp-api.herokuapp.com/api/characters');
	console.log(res);
}

	
	let characterAge = character[i].yearOfBirth;

	characterElements.innerHTML ="";



if (characterAge = ""){
	"uvisst."
}else {
	characterAge - 2022
 };

if (character[i].alive === "true"){
	"Character is alive."
} else{
	"Character is dead."
};

characterElements.innerHTML +=
"<div class='student-wrapper' id='student-" + 
i + 
"'>" +
"<p>Navn: " +
character[i].name + 
"</p>" + 
"<img class ='image' src='character[i].image'></img>" +
"<p>Age: "+
characterAge +
"</p>" +
"<p>House: " +
character[i].house +
"</p>"



 "<img class ='image' src='/assets/global/defaultimage.png/'></img>"




function filterByHouse(self) {
	let currentHouse = "House: " + self.innerHTML;
	let characters =  document.getElementById("characters").children;
	
	for (let i = 0; i < characters.length; i++) {
		
		let character = characters[i];
		let characterHouse = characters[i].children[2].innerHTML;

		if (characterHouse != currentHouse) {
			character.classList.add("hidden-house");
		}else {
			character.classList.remove("hidden-house");
		};
	}
}


*/
/*

function queryCharactersApi() {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let characters = JSON.parse(this.responseText);
      for (let i = 0; i < characters.length; i++) {
        let character = characters[i];
        if (character.image === "") {
          character.image = "/assets/global/defaultimage.png";
        }
		

        let p1 = document.createElement("p");
        let name = document.createTextNode(character.name);

        let p2 = document.createElement("p");
        let alive = document.createTextNode("Alive= " + character.alive);

        let p3 = document.createElement("p");
        let house = document.createTextNode("House: " + character.house);

        let p4 = document.createElement("p");
        let yearOfBirth = document.createTextNode(character.yearOfBirth);

        let p5 = document.createElement("img");
        let image = document.createTextNode(character.image);
		
		let newCharacter =  document.createElement("div");

		if (character.house !== "Gryffindor") {
			newCharacter.classList.add("hidden-house");
		}
        p1.appendChild(name);
        newCharacter.appendChild(p1);

        p2.appendChild(alive);
      
        newCharacter.appendChild(p2);

        p3.appendChild(house);
		
        newCharacter.appendChild(p3);
        
        p4.appendChild(yearOfBirth);
		
        newCharacter.appendChild(p4);

        p5.appendChild(image);
        p5.setAttribute("src", character.image);

        p5.height = "200";
        newCharacter.appendChild(p5);

		document.getElementById("characters").appendChild(newCharacter)
      }
    }
  };

  req.open("GET", "http://hp-api.herokuapp.com/api/characters");
  req.send();
}

queryCharactersApi();
*/