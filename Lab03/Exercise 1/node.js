

main = function()
{
	var x = document.getElementById("password").value;
	var y = document.getElementById("confirm").value;

	if(x.length < 8)
	{
		document.getElementById("print").innerHTML = "Your password has to be at least 8 characters long !";
	}
	else if(x != y)
	{
		document.getElementById("print").innerHTML = "Password doesn't match !";
	}
	else if(x == y)
	{
		document.getElementById("print").innerHTML = "Log-in Successfully !";
	}


}
