const loadCharacters = async () => {
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw "feilmelding";
    })
    .then((data) => {
      filterStaffMembers(data);
    })
    .catch((err) => console.log("first", err));
};
loadCharacters();
let staffMembers = [];

function filterStaffMembers(data) {
  staffMembers = data.filter(function (data) {
    return data.hogwartsStaff == true;
  });
  displayTeachers(staffMembers);
  return staffMembers;
}
function renderData(data) {
  staffMembers = data.filter(function (data) {
    return data.hogwartsStaff == true;
  });
  console.log(staffMembers);
  return staffMembers;
}

const teacherList = document.querySelector(".teacher-list");

function displayTeachers(staffMembers) {
  console.log(staffMembers);
  const teacherList = document.querySelector(".teacher-list");
  teacherList.innerHTML = "";
  for (let i = 0; i < staffMembers.length; i++) {
    let editTeacherCard = document.createElement("li");
    editTeacherCard.classList.add("edit-teacher");
    editTeacherCard.style.display = "none";
    let heading = document.createElement("h4");
    heading.innerText = "Update Teacher Info";
    let editNameInput = document.createElement("input");
    editNameInput.value = `${staffMembers[i].name}`;
    let editHouseInput = document.createElement("input");
    editHouseInput.value = `${staffMembers[i].house}`;
    let editPatronusInput = document.createElement("input");
    editPatronusInput.value = `${staffMembers[i].patronus}`;
    let teacherCard = document.createElement("li");
    let teacherName = document.createElement("h2");
    teacherName.innerText = staffMembers[i].name;
    let teacherHouse = document.createElement("p");
    teacherHouse.classList.add("teacher-house");
    teacherHouse.innerText = `House: ${staffMembers[i].house}`;
    if (staffMembers[i].house == "Gryffindor") {
      teacherCard.classList.add("teacher-gryffindor");
    } else if (staffMembers[i].house == "Slytherin") {
      teacherCard.classList.add("teacher-slytherin");
    } else if (staffMembers[i].house == "Hufflepuff") {
      teacherCard.classList.add("teacher-hufflepuff");
    } else if (staffMembers[i].house == "Ravenclaw") {
      teacherCard.classList.add("teacher-ravenclaw");
    } else {
      teacherCard.classList.add("teacher");
      teacherHouse.innerText = `House: Unknown`;
    }
    let teacherPatronus = document.createElement("p");
    teacherPatronus.classList.add("teacher-patronus");
    if (staffMembers[i].patronus == "") {
      teacherPatronus.innerText = "Patronus: Unknown";
    } else {
      teacherPatronus.innerText = `Patronus: ${staffMembers[i].patronus}`;
    }
    let teacherImage = document.createElement("img");
    teacherImage.classList.add("image");
    if (staffMembers[i].image == "") {
      teacherImage.src = "/assets/global/defaultimage.png";
    } else {
      teacherImage.src = staffMembers[i].image;
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btns", "delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteTeacher(i, staffMembers);
    });
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btns", "edit-btn");
    editBtn.addEventListener("click", () => {
      teacherCard.style.display = "none";
      editTeacherCard.style.display = "grid";
    });

    let saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.addEventListener("click", () => {
      let editedName = editNameInput.value;
      let editedHouse = editHouseInput.value;
      const capitalizeHouse = editedHouse;
      const houseName =
        capitalizeHouse.charAt(0).toUpperCase() + capitalizeHouse.slice(1);
      console.log(houseName);

      let editedPatronus = editPatronusInput.value;
      saveEditedInfo(i, staffMembers, editedName, houseName, editedPatronus);
    });
    let exitBtn = document.createElement("button");
    exitBtn.innerText = "Exit";
    exitBtn.addEventListener("click", () => {
      editTeacherCard.style.display = "none";
      teacherCard.style.display = "grid";
    });

    teacherList.append(teacherCard, editTeacherCard);
    teacherCard.append(
      teacherName,
      teacherHouse,
      teacherPatronus,
      teacherImage,
      deleteBtn,
      editBtn
    );

    editTeacherCard.append(
      heading,
      editNameInput,
      editHouseInput,
      editPatronusInput,
      saveBtn,
      exitBtn
    );
  }
}

let exitBtn = document.createElement("button");
exitBtn.innerText = "Exit";
exitBtn.addEventListener("click", () => {
  editTeacherCard.style.display = "none";
  teacherCard.style.display = "grid";
});

function saveEditedInfo(
  i,
  staffMembers,
  editedName,
  editedHouse,
  editedPatronus
) {
  staffMembers[i] = {
    ...staffMembers[i],
    name: editedName,
    house: editedHouse,
    patronus: editedPatronus,
  };
  displayTeachers(staffMembers);
}

function deleteTeacher(index, staffMembers) {
  let userConfirm = prompt(
    "Do you want to delete this teacher from list? yes/no"
  );
  if (userConfirm == "yes") {
    staffMembers.splice(index, 1);
  } else {
    alert("Nothing deleted from this list");
  }
  displayTeachers(staffMembers);
}
//
//
function addTeacher() {
  let inputImage = "input-image";
  let inputName = document.getElementById("input-name");
  let inputPatronus = document.getElementById("input-patronus");
  let inputHouse = document.getElementById("input-house");
  if (inputName == "" || inputPatronus == "") {
    alert("Fill in all the information");
  } else if (
    ["gryffindor", "hufflepuff", "slytherin", "ravenclaw"].includes(
      inputHouse.value.toLowerCase()
    )
  ) {
    let userAnswer = prompt("Do you want to save this New Teacher? yes/no");
    if (userAnswer == "yes") {
      staffMembers.push({
        name: inputName.value,
        house: inputHouse.value,
        patronus: inputPatronus.value,
        image: inputImage.value,
      });
      alert("New Teacher saved");
    } else {
      alert("No New teacher saved");
    }
  }
  displayTeachers(staffMembers);
}
//
//
