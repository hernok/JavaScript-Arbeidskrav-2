
/** SELECTOR **/
const characterList = document.getElementById('characters-list');
const classRoomBtn = document.querySelector(".classroom-button");
const snapesList = document.getElementById("snapes-card-info");

//**Array selectors**/
let snapesInfo = []; // This is where the teacher info api is pushed to
let randomCharacters = []; // This is where the random students api info will be pushed to

/**EVENT LISTENERS **/
classRoomBtn.addEventListener("click", e => {
    characterList.innerHTML = "";
    for(i = 0; i < 10; i++){
        displayrandomCharacters();
        }
})
/** Loads in the teacher as soon as webpage opens**/
snapesList.addEventListener("load", loadTeacher());

//*** */
async function displayrandomCharacters() {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        randomCharacters = await res.json();
    } catch (error){
        console.error(error);
    }
    let onlyTenChars = randomCharacters[Math.floor(Math.random() * randomCharacters.length)]; 
if(onlyTenChars.image === ""){
    const htmlString = document.createElement("ul"); 
    htmlString.innerHTML =
             `
            <li class="hp_characters">
            <h2>${onlyTenChars.name}</h2>
            <p>House: ${onlyTenChars.house}</p>
            <img class ="default-image" src="/assets/global/defaultimage.png"></img>
            <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
        </li>
    `; 
            characterList.append(htmlString);
}else{
    const htmlString = document.createElement("ul");
    htmlString.innerHTML =
             `
            <li class="hp_characters">
            <h2>${onlyTenChars.name}</h2>
            <p>House: ${onlyTenChars.house}</p>
            <img src="${onlyTenChars.image}"></img>
            <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
        </li>
    `;    
    characterList.append(htmlString);
}   
    const deleteBtn = characterList.querySelector('.delete-btn');
    deleteBtn.addEventListener("click", deleteStudent);
    let colors = ['#ff0000', '#00ff00', '#0000ff' , 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
    var potterCharacters = document.querySelectorAll(".hp_characters");
 
    for(i = 0; i < potterCharacters.length; i++){
    potterCharacters[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }    
}

    async function loadTeacher() {
        try {
            const res = await fetch("https://hp-api.herokuapp.com/api/characters/staff");
            snapesInfo = await res.json();
        }catch (error){
            console.error(error);
    } teacherInfo = snapesInfo[1];
    wandInfo = snapesInfo[1].wand;
    teacherHtmlString = document.createElement("ul");
    teacherHtmlString.innerHTML = 
            `
            <li class="snapes_list">
            <h2>${teacherInfo.name}</h2>
            <p class="s_house">House: ${teacherInfo.house}</p>
            <p class="s_age">Age: ${parseInt(2022 - teacherInfo.yearOfBirth)}</p>
            <p class="s_wand">Wand: ${wandInfo.wood}</p>
            <img src="${teacherInfo.image}"></img>
            </li>
            `;
            snapesList.append(teacherHtmlString);
    }
 
    function deleteStudent(e) {
        const userConfirm = prompt("Do you wish to remove student? yes / no").toLowerCase();
        if(userConfirm == "yes") {{
            randomCharacters.splice(e,1);
            const element = e.currentTarget.parentElement.parentElement;
            characterList.removeChild(element);
            alert("student successfully removed")
            displayrandomCharacters()
        }
    } else 
    alert("student is not removed from class"); 
    }
