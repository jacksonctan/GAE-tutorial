function myFunction()
{
  x=document.getElementById("demo"); //Find the element
  x.innerHTML="Hello JavaScript!"; //Change the content
}

function scrubInput()
{
  var x=document.getElementById("num").value;
  if (x=="" || isNaN(x))
  {
    alert("Not Numeric");
  }
}

function changeImage()
{
  element=document.getElementById('myimage')
  if (element.src.match("bulbon"))
  {
    element.src="/img/pic_bulboff.gif"
  }
  else
  {
    element.src="/img/pic_bulbon.gif"
  }
}

