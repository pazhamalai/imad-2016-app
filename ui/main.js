console.log('Loaded!');
var img= document.getElementById('logo');
var element=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
  marginLeft=marginLeft + 5;
  img.style.marginLeft=marginLeft+'px';
}
img.onclick = function ()
{
    var interval= setInterval(moveRight , 100);
};
element.onclick=function()
{
  var inter=setInterval(moveRight,100);  
};

var button=document.getElementById('counter');
button.onclick = function()
{
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML = counter.toString();
};


