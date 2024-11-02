let mouseclick = 0;
console.log("open");
window.onload=function(){
    var id = document.getElementById("click_time");
    console.log(id);
    id.innerHTML = mouseclick;    
}
function mouseover(){
    console.log(mouseclick)
    mouseclick++;
}