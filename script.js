let str;
document.getElementById("evaluatedText").value = ""; // initially string is empty so count is also empty
document.addEventListener("keyup", function () {
	  str = document.getElementById("evaluatedText").value; //here this value will return string
 let x = str.split(' ')
	x= x.filter(item => item);
	console.log(x)
	document.querySelector("#wordCount").textContent = x.length;