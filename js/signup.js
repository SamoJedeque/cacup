

var img = document.getElementById('myImage');
var checked = document.getElementById('check'); 
// Get input element
var input = document.querySelector(".myInput");

// Function to show the image
function showImage() {
    img.style.display = 'inline';
	checked.style.display = 'none';
	setTimeout(hideImage, 5000);
}

// Function to hide the image
function hideImage() {
	// verify();
    img.style.display = 'none';
	checked.style.display = 'inline';
	hideForm();
}


function hideForm(){
	document.querySelector(".formData").style.display = 'none';
	document.querySelector('.submit-two').style.display = 'inline';
}


function verify(){
	if (input.value === "") {
		input.alert("Preencha todos os campos!");
	}
}