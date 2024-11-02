console.log("Hello World");
alert("Hello World");
get_id("二级标签")
for (let i = 0; i < 101; i++) { 
    time_stop(i);
    console.log(i);
}
function time_stop(time){
    if (time == 100){
        console.log("打印完成100次");
        return "打印完成100次";
    }
}
function get_id(id){
    let id = document.getElementById(id);
    console.log(id);
}