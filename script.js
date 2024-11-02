let mouseclick = 0;
console.log("open");

window.onload = function() {
    var id = document.getElementById("click_time");
    console.log(id);
    id.innerHTML = mouseclick;

    var button = document.getElementById("click_button");
    button.addEventListener("click", function() {
        mouseclick++;
        id.innerHTML = mouseclick;
    });
}