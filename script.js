let str;
document.getElementById("evaluatedText").value = ""; // initially string is empty so count is also empty

document.addEventListener("keyup", function () {
	  str = document.getElementById("evaluatedText").value; //here this value will return string
	// consostr.split(' ').length;
		 // str = str.replace(/(^\s*)|(\s*$)/gi,"");  // Exclude the start and end spaces of a string
   //       str = str.replace(/[ ]{2,}/gi," "); // reduce multiple spaces to a single space.
 let x = str.split(' ')
	x= x.filter(item => item);
	console.log(x)
	document.querySelector("#wordCount").textContent = x.length;
	
    // console.log(str);
	// console.log(str.split(' ').length);
});
