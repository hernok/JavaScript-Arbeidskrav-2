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

function queryCharactersApi() {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let characters = JSON.parse(this.responseText);
      for (let i = 0; i < characters.length; i++) {
        let character = characters[i];
        if (character.image === "") {
          character.image = "/assets/defaultimage.png";
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


/*

function addStudent() {
	student.push({
		name: inputStudentName.value,
		house: inputHouseName.value,
		age: inputAge.value,
		alive: inputAlive.value,
	});
}

*/
