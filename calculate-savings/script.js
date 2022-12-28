function percentage() {

	// Method returns the element of percent id
	var percentHome = "12"
	var percentVacation = "8"
	
	// Get the salary
	var num = document.getElementById("salary").value;
	
	//Calculate the percentages
	var homeSavings = (num / 100) * percentHome;
	var vacationSavings = (num / 100) * percentHome;

	// Show values
	document.getElementById("value1").value = 
		"Home (12%): " + homeSavings + "<br>" + "Vacation (8%): " + vacationSavings ;
}
