function percentage() {

	// Method returns the element of percent id
	var percentHome = "12"
	var percentVacation = "8"
	
	// Get the salary & label to show results
	var num = document.getElementById("salary").value;
	const label = document.getElementById("amounts");
	
	//Calculate the percentages
	var homeSavings = (num / 100) * percentHome;
	var vacationSavings = (num / 100) * percentHome;

	// Show values
	label.innerHTML = "Home (12%): " + homeSavings + "</br>" + "Vacation (8%): " + vacationSavings;

	//document.getElementById("amounts").value = 
	//	"Home (12%): " + homeSavings + "<br>" + "Vacation (8%): " + vacationSavings ;
}
