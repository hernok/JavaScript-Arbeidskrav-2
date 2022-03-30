
/** SELECTOR **/

const characterList = document.getElementById('characters-list')
let hpCharacters = [];


var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByClassName('.hp_chracters').style.background = random_color;

/**EVENT LISTENERS **/


/** FUNCTIONS **/
const getCharacters = async() => {
    try {
        const promise = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await promise.json();
        displayCharacters(hpCharacters.math.random(10));
    }catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters.map((characters) => {
        return `
        <li class="hp_characters">
        <h2>${characters.name}</h2>
        <p>House: ${characters.house}</p>
        <img src="${characters.image}"></img>
    </li>
`;
    })
    .join('');
    characterList.innerHTML = htmlString;
}

getCharacters();