let mouseclick = 0;
console.log("open");
window.onload=function(){
    let id = document.getElementById("click_time");
    console.log(id);
    id.innerHTML = mouseclick;

    let button = document.getElementById("button_hello");
    button.addEventListener("click", function() {
        mouseclick++;
        id.innerHTML = mouseclick;
        console.log(mouseclick);
    });
}
