console.log('Loaded!');
var element= document.getElementById('logo');
function moveRight()
{
  marginLeft=marginLeft+5;
  element.style.marginLeft=marginleft+'px';
}
element.onclick = function()
{
    var interval=setInterval(moveRight,100);
};