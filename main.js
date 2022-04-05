let characterElements = document.getElementById("characters");

function getItems(page) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let charObj = JSON.parse(this.responseText);
      for (let i = 0; i < charObj.length; i++) {
        let p = document.createElement("p");
        let name = document.createTextNode(charObj[i].name);

        let p2 = document.createElement("p2");
        let alive = document.createTextNode(charObj[i].alive);

        let p3 = document.createElement("p3");
        let species = document.createTextNode(charObj[i].species);

        let p4 = document.createElement("p4");
        let house = document.createTextNode(charObj[i].house);

        let p5 = document.createElement("p5");
        let dateOfBirth = document.createTextNode(charObj[i].dateOfBirth);

        let p6 = document.createElement("img");
        let image = document.createTextNode(charObj[i].image);

        p.appendChild(name);
        document.body.appendChild(p);

        p2.appendChild(alive);
        p2.appendChild(document.createTextNode(" "));
        document.body.appendChild(p2);

        p3.appendChild(species);
        p3.appendChild(document.createElement("br"));

        p4.appendChild(house);
        document.body.appendChild(p4);
        p4.appendChild(document.createElement("br"));

        p5.appendChild(dateOfBirth);
        document.body.appendChild(p5);
        p5.appendChild(document.createElement("br"));

        p6.appendChild(image);
        p6.setAttribute("src", charObj[i].image);

        p6.height = "200";
        document.body.appendChild(p6);
      }
    }
  };

  req.open("GET", "http://hp-api.herokuapp.com/api/characters?page=");
  req.send();
}

for (let i = 1; i <= 150; i++) {
  getItems(i);
}

/*

        characterElements.innerHTML +=
          "<div class='character-wrapper' id='character-list'" + i;

*/

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
