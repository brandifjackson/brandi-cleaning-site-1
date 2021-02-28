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

/* RESPONSIVE NAVBAR */
function myFunction() {
    var x = document.getElementById("navbar-2");
    if (x.className === "mobile-navbar-2") {
        x.className += " responsive";
    } else {
        x.className = "mobile-navbar-2";
    }
}

/* SCROLL TO TOP */
document.getElementById("scroll-to-top").addEventListener("click", function(event){
    event.preventDefault()
	document.body.scrollTop = document.documentElement.scrollTop = 0;
});

/* VALIDATE CONTACT FORM */
// DISABLE NATIVE FORM VALIDATION 
 var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}   


function validateContactForm()
{
	if (document.contactform.name.value == "")
	{
		document.getElementById("error-message").innerHTML = "Please provide a name.";
		document.contactform.name.focus();
		return false;
	}
	
	if (document.contactform.email.value == "")
	{
		document.getElementById("error-message").innerHTML = "Please provide an email address.";
		document.contactform.email.focus();
		return false;
	}
	
	var regemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!regemail.test(document.contactform.email.value))
	{
		document.getElementById("error-message").innerHTML = "Please enter a valid email address.";
		document.contactform.email.focus();
		return false;
	}
	
	if (document.contactform.contactnumber.value == "")
	{
		document.getElementById("error-message").innerHTML = "Please enter a contact number.";
		document.contactform.contactnumber.focus();
		return false;
	}
	
	var regphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	if (!regphone.test(document.contactform.contactnumber.value))
	{
		document.getElementById("error-message").innerHTML = "Please enter a valid phone number.";
		document.contactform.contactnumber.focus();
		return false;
	}
	
	if (document.contactform.message.value == "")
	{
		document.getElementById("error-message").innerHTML = "Please provide a message.";
		document.contactform.message.focus();
		return false;
	}
	
	return true;
}

/* VALIDATE QUOTE FORM */

function validateQuoteform()
{
    	

    //top of form
   	if (document.quoteform.firstname.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please provide a first name.";
		document.getElementById('label_name').style.color = "red";
		document.quoteform.firstname.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_name').style.color = "black";
	
 	if (document.quoteform.lastname.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please provide a last name.";
		document.getElementById('label_name').style.color = "red";
		document.quoteform.lastname.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_name').style.color = "black";
	
	if (document.quoteform.qemail.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please provide an email address.";
		document.getElementById('label_qemail').style.color = "red";
		document.quoteform.qemail.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_qemail').style.color = "black";
	
	var regemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!regemail.test(document.quoteform.qemail.value))
	{
		document.getElementById("error-quote-message").innerHTML = "Please enter a valid email address.";
		document.getElementById('label_qemail').style.color = "red";
		document.quoteform.qemail.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_qemail').style.color = "black";
	
	
	if (document.quoteform.qnumber.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please enter a contact number.";
		document.getElementById('label_qnumber').style.color = "red";
		document.quoteform.qnumber.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_qnumber').style.color = "black";
	
	var regphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	if (!regphone.test(document.quoteform.qnumber.value))
	{
		document.getElementById("error-quote-message").innerHTML = "Please enter a valid phone number.";
		document.getElementById('label_qnumber').style.color = "red";
		document.quoteform.qnumber.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_qnumber').style.color = "black";
	
	if (document.quoteform.address1.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please enter a street address.";
		document.getElementById('label_address').style.color = "red";
		document.quoteform.address1.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_address').style.color = "black";
	
	if (document.quoteform.city.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please enter a city.";
		document.getElementById('label_address').style.color = "red";
		document.quoteform.city.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_address').style.color = "black";
	
	if (document.quoteform.state.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please select a state.";
		document.getElementById('label_address').style.color = "red";
		document.quoteform.state.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_address').style.color = "black";
	
	if (document.quoteform.zipcode.value == "")
	{
		document.getElementById("error-quote-message").innerHTML = "Please enter a zipcode.";
		document.getElementById('label_address').style.color = "red";
		document.quoteform.zipcode.focus();
		window.scrollTo(0, 250);
		return false;
	}
	document.getElementById('label_address').style.color = "black";

    var regzipcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (!regzipcode.test(document.quoteform.zipcode.value)) {
        document.getElementById("error-quote-message").innerHTML = "Please enter a valid zipcode.";
        document.getElementById('label_address').style.color = "red";
        document.quoteform.zipcode.focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_address').style.color = "black";

    //bottom half
    if (document.quoteform.hometype.value == "")
    {
        document.getElementById("error-quote-message").innerHTML = "Please select the type of home you live in.";
        document.getElementById('label_hometype').style.color = "red";
        document.quoteform.hometype.focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_hometype').style.color = "black";


    if (document.quoteform.bedroomcount.value == 0)
    {
        document.getElementById("error-quote-message").innerHTML = "Please enter number of bedrooms in home.";
        document.getElementById('label_bedroomcount').style.color = "red";
        document.quoteform.bedroomcount.focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_bedroomcount').style.color = "black";

    if (document.quoteform.bathroomcount.value == 0)
    {
        document.getElementById("error-quote-message").innerHTML = "Please enter number of bathrooms in home.";
        document.getElementById('label_bathroomcount').style.color = "red";
        document.quoteform.bathroomcount.focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_bathroomcount').style.color = "black";

    if (document.quoteform.homelevels.value == 0)
    {
        document.getElementById("error-quote-message").innerHTML = "Please the number of levels in your home.";
        document.getElementById('label_homelevels').style.color = "red";
        document.quoteform.homelevels.focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_homelevels').style.color = "black";

    if (document.quoteform.homecondition.value == "")
    {
        document.getElementById("error-quote-message").innerHTML = "Please select the condition of your home.";
        document.getElementById('label_homecondition').style.color = "red";
        document.quoteform.homecondition.focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_homecondition').style.color = "black";

    var servicecheckbox = document.querySelector('input[name="service"]:checked');
    if (!servicecheckbox)
    {
        document.getElementById("error-quote-message").innerHTML = "Please select the services you are interested in.";
        document.getElementById('label_service').style.color = "red";
        document.quoteform.service[0].focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_service').style.color = "black";

    var servicecheckbox = document.querySelector('input[name="frequency"]:checked');
    if (!servicecheckbox)
    {
        document.getElementById("error-quote-message").innerHTML = "Please select the frequency of service you are interested in.";
        document.getElementById('label_frequency').style.color = "red";
        document.quoteform.frequency[0].focus();
        window.scrollTo(0, 250);
        return false;
    }
    document.getElementById('label_frequency').style.color = "black";
	
	return true;
}




































