
function change()
{
  var effect = document.getElementById("dummyText");

  effect.style.backgroundColor = `rgb(${document.getElementById("redbackground").value},${document.getElementById("greenbackground").value}, ${document.getElementById("bluebackground").value})`;

  effect.style.borderColor = `rgb(${document.getElementById("redborder").value},${document.getElementById("greenborder").value},${document.getElementById("blueborder").value})`;

  effect.style.borderWidth = document.getElementById("borderwidth").value;
}
