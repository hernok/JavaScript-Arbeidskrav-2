async function getStudentApi(url) {
	const student = await fetch(url);
	const jsonData = await student.json();
	console.log(jsonData);
	for (let i = 0; i < student.length; i++) {
		getStudentApi().then((json) => {
			document.getElementById("test").innerHTML = `${json["name"]}`;
		});
	}
}
function getStudentOnLoad() {
	getStudentApi("http://hp-api.herokuapp.com/api/characters");
}

function addStudent() {
	student.push({
		name: inputStudentName.value,
		house: inputHouseName.value,
		age: inputAge.value,
		alive: inputAlive.value,
	});
}
