fetch("http://hp-api.herokuapp.com/api/characters")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw "feilmelding";
  })
  .then((data) => {
    displayTeacher(renderData(data));
  })
  .catch((err) => console.log("first", err));

let staffMembers;

function renderData(data) {
  staffMembers = data.filter(function (data) {
    return data.hogwartsStaff == true;
  });
  console.log(staffMembers);
  return staffMembers;
}

const teacherList = document.querySelector(".teacher-list");

const displayTeacher = (hogwartsStaffList) => {
  console.log(hogwartsStaffList);
  hogwartsStaffList.forEach((staffMember) => {
    let placeholder = staffMember.image;
    if (staffMember.image === "") {
      placeholder = "/img/defaultimage.png";
    }
    let hogwartsHouse = staffMember.house;
    if (staffMember.house === "") {
      hogwartsHouse = "Not in a house";
    }
    let hogwartsPatronus = staffMember.patronus;

    teacherList.innerHTML += `<li class="teacher">
        <h2>${staffMember.name}</h2>
        <p class="teacher-house">House: ${hogwartsHouse}</p>
        <p class="teacher-patronus">Patronus: ${hogwartsPatronus}</p>
        <button id="delete-btn" onclick="deleteTeacher()">Delete teacher</button>
        <button id="edit-btn" onclick="editTeacher()">Edit teacher</button>
        <img src="${placeholder}" class="teacher-image"/>
        </li>
        `;
  });

  let teachers = document.body.querySelectorAll(".teacher");
  for (let teacher of teachers) {
    teacher.addEventListener("mouseover", function () {
      this.querySelector(".teacher-patronus").style.visibility = "visible";
    });
    teacher.addEventListener("mouseout", function () {
      this.querySelector(".teacher-patronus").style.visibility = "hidden";
    });
  }
};
