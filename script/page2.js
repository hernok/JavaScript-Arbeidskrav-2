
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
        displayrandomCharacters()
        }
})

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
            <img class ="default-image" src="/img/defaultimage.png"></img>
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
    teacherHtmlString = document.createElement("ul");
    teacherHtmlString.innerHTML = 
            `
            <li class="snapes_list">
            <h2>${teacherInfo.name}</h2>
            <p>House: ${teacherInfo.house}</p>
            <img src="${teacherInfo.image}"></img>
            </li>
            `;
            snapesList.append(teacherHtmlString);
   
    }
 

