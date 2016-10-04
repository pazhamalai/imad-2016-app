console.log('Loaded!');
var img= document.getElementById('logo');
var element=document.getElementById('madi');
var marginLeft=0;
var movel=0;
function moveRight()
{
  marginLeft=marginLeft + 5;
  img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function ()
{
    var interval= setInterval(moveRight , 100);
};
function moveR()
{
  movel=movel + 5;
  element.style.marginLeft=movel + 'px';
}
element.onclick=function()
{
  var inter=setInterval(moveR,100);  
};