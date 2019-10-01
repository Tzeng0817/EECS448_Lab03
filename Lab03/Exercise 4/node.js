
function func()
{
  var x = document.getElementById("DummyText");

  x.style.backgroundColor = `rgb(${document.getElementById("RED").value},${document.getElementById("GREEN").value}, ${document.getElementById("BLUE").value})`;

  x.style.borderColor = `rgb(${document.getElementById("redborder").value},${document.getElementById("greenborder").value},${document.getElementById("blueborder").value})`;

  x.style.borderWidth = document.getElementById("borderwidth").value;
}
