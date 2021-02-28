/* NAVBAR */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
	document.getElementById("navbar").style.backgroundColor = "#ffffff";
	document.getElementById("navbar").style.lineHeight = "20px";
	document.getElementById("navbar").style.Transition = 'opacity 5s';
    var navbar = document.getElementById("navbar");
    for (var i = 0; i < navbar.childNodes.length; i++)
	{
	document.getElementById("navbar").getElementsByClassName("link")[i].style.color = "#000000";
    }
  } 
  
  else {
    document.getElementById("navbar").style.top = "0px";
	document.getElementById("navbar").style.backgroundColor = "transparent";
	document.getElementById("navbar").style.lineHeight = "20px"
    var navbar = document.getElementById("navbar");
    for (var i = 0; i < navbar.childNodes.length; i++) {
       document.getElementById("navbar").getElementsByClassName("link")[i].style.color = "#FFFFFF";
    }
  }
} 

/* SCROLL REVEAL */

/* window.sr = ScrollReveal();
sr.reveal('.footer-arrow, .about-content h2, .about-content p, .aboutbutton, .additional-service h2, .additional-service p, #location-title, #location-city, #location-address, #location-hours, #location-number, #location-image, #contact-form-container h2, #contactform, .whychooseus-container, .testimony-container');

 */
 
/* RESPONSIVE NAVBAR */
function myFunction() {
    var x = document.getElementById("navbar-2");
    if (x.className === "mobile-navbar-2") {
        x.className += " responsive";
    } else {
        x.className = "mobile-navbar-2";
    }
}


/* VALIDATE FORM */
// DISABLE NATIVE FORM VALIDATION 
var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}	  

function validateName()
{
	if( document.contactform.name.value == "" )
	{
	document.getElementById("error-message").innerHTML = "Please provide a name.";
	document.contactform.name.focus();
	return false;
	}

	else if( document.contactform.name.value.length < 3 )
	{
	document.getElementById("error-message").innerHTML = "Please provide a valid name.";
	document.contactform.email.focus();
	return false;
	}

	else
	{
	document.getElementById("error-message").innerHTML = "";
	document.contactform.name.blur();
	return false;
	}
}

function validateEmail()
{

	var email = document.getElementById('email');
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if( document.contactform.email.value == "" )
	{
	document.getElementById("error-message").innerHTML = "Please provide an email.";
	document.contactform.email.focus();
	return false;
	}

	else if(!reg.test(email.value))
	{
	document.getElementById("error-message").innerHTML = "Please provide a valid email address.";
	document.contactform.email.focus();
	return false;
	}

	else
	{
	document.getElementById("error-message").innerHTML = "";
	document.contactform.name.blur();
	return false;
	}
}

function validateNumber()
{	
	var number = document.getElementById('contactnumber');
	var reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

	if( document.contactform.contactnumber.value == "" )
	{
	document.getElementById("error-message").innerHTML = "Please provide an phone number.";
	document.contactform.contactnumber.focus();
	return false;
	}

	else if(!reg.test(contactnumber.value))
	{
	document.getElementById("error-message").innerHTML = "Please provide a valid phone number.";
	document.contactform.contactnumber.focus();
	return false;
	}

	else
	{
	document.getElementById("error-message").innerHTML = "";
	document.contactform.contactnumber.blur();
	return false;
	}
}

function validateMessage()
{
	if( document.contactform.message.value == "" )
	{
	document.getElementById("error-message").innerHTML = "Please provide a message.";
	document.contactform.message.focus();
	return false;
	}

	else
	{
	document.getElementById("error-message").innerHTML = "";
	document.contactform.message.blur();
	return false;
	}
}

function validateForm() {
    var name, email, number, message;
    name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	number = document.getElementById("contactnumber").value;
	message = document.getElementById("message").value;
    if (name == "" || email == "" || number == "" || message == "" ) {
        document.getElementById("error-message").innerHTML = "Please fill out the form.";
        return false;
    };
	
	
}
