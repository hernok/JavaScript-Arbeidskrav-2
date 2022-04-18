let charactersList = document.getElementById("charactersList");
let searchBar = document.getElementById("searchBar");
let currentHouse = "";
let allCharacters = [];

searchBar.addEventListener("keyup", function(e) {
    let searchString = e.target.value.toLowerCase();
    let filteredCharacters = allCharacters.filter(function(character) {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(currentHouse)
        );
    });
    displayCharacters(filteredCharacters);
});	

function filterByHouse(houseName) {
	currentHouse = houseName;
	let filteredCharacters = allCharacters.filter(function(character) {
        return (
            character.house.toLowerCase().includes(houseName)
        );
    });
    displayCharacters(filteredCharacters);
}

function addStudent() {
	let inputName = document.getElementById("input-name")
	let inputHouse = document.getElementById("input-house")
	let inputAge = document.getElementById("input-age")
	let inputAlive = document.getElementById("input-alive")
	let inputImage = document.getElementById("input-image")

	if (inputName.value, inputHouse.value, inputAge.value, inputAlive.value === "") {
		alert("Please fill out all the input fields")
	} else if (["gryffindor", "hufflepuff", "slytherin", "ravenclaw"].includes(inputHouse.value.toLowerCase())) {
		allCharacters.push({
			name: inputName.value,
			house: inputHouse.value,
			age: inputAge.value,
			alive: inputAlive.value,
			image: inputImage.value,
		});
		filterByHouse(inputHouse.value.toLowerCase());
	} else { 
		alert("Please use an existing house name such as Gryffindor or Slytherin")
	}
};

async function loadCharacters() {
    try {
        const res = await fetch("https://hp-api.herokuapp.com/api/characters");
        allCharacters = await res.json();
    } catch (error) {
        console.error(error);
    }
};

function displayCharacters(characters) {
	charactersList.innerHTML = "";
    for (let i = 0; i < characters.length; i++) {
        let character = characters[i];
		let characterAge = "<p class='age'> Age: " + parseInt(2022 - character.yearOfBirth) + "</p>";
		let characterBirthYear= character.yearOfBirth;
		let characterImage = "<img class='image' src='" + character.image + "'/>";
		let characterName = character.name;
		let characterHouse = character.house;
		let characterAlive = character.alive;
		let characterIsStudent = character.hogwartsStudent;
		let characterAliveText = "<p class='alive'>This character is alive</p>"

        if(character.image === "") {
			characterImage = "<img class='image' src='/assets/global/defaultimage.png'/>"
     	}
		
		if(characterBirthYear === "") {
			characterAge = "<p class='age'>Age: unknown</p>"
		}
		if(characterAlive === false) {
			characterAge = "";
			characterAliveText = "<p class='dead'>This character is dead</p>"
		}
		if(characterIsStudent === false) {
			continue;
		}

		characterElement = document.createElement("div");
		characterElement.innerHTML =
			`<li class="hp-characters ${characterHouse.toLowerCase()}-card">
				<h3 class="name">${characterName}</h3>
				<p class="banner">House: ${characterHouse}</p> 
				${characterAge}
				${characterAliveText}
				${characterImage}
			</li>`
		charactersList.appendChild(characterElement);
	};
};