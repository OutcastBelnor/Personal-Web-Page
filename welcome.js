function welcomeByName()
{
	var name = document.getElementById("name").value;
	
	var date = new Date();
	var hours = date.getHours();
	
	if (name != "")
	{
		if (hours < 12)
		{
			alert("Good morning " + name + "!");
			document.getElementById("welcome").innerHTML = 
				"<h1>Good morning " + name + "!</h1><br />Make yourself comfortable!";
		}
		else if (hours < 18)
		{
			alert("Good afternoon " + name + "!");
			document.getElementById("welcome").innerHTML = 
				"<h1>Good afternoon " + name + "!</h1><br />Make yourself comfortable!";
		}
		else
		{
			alert("Good evening " + name + "!");
			document.getElementById("welcome").innerHTML = 
				"<h1>Good evening " + name + "!</h1><br />Make yourself comfortable!";
		}
	}
}