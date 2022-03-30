async function getStudentApi(url) {
	const student = await fetch(url);
	const jsonData = await student.json();
	console.log(jsonData);
	for (let i = 0; i < student.length; i++) {
		if (student.name == true) {
			document.getElementById("test").innerHTML = "We are alive!";
		} else {
			document.getElementById("test").innerHTML = "I'm dead!";
		}
	}
}
function getStudentOnLoad() {
	getStudentApi("http://hp-api.herokuapp.com/api/characters");
}
