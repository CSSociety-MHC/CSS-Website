var init_btn = document.getElementsByClassName("BUTTON")[0];
var init_contents= document.getElementsByClassName("CONTENT")[0];

function hideit(contentName) {

	if (document.getElementById(contentName).style.display == "block") {
		document.getElementById(contentName).style.display = "none";
	} else {
		document.getElementById(contentName).style.display = "block";
	}
	
}
