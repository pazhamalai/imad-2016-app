console.log('Loaded!');
var element= document.getElementById('logo');
var marginLeft=0;
function moveRight()
{
  marginLeft=marginLeft+5;
  element.style.marginLeft=marginleft+'px';
}
element.onclick = function()
{
    var interval=setInterval(moveRight,100);
};