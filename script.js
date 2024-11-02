console.log("Hello World");
alert("Hello World");
for (let i = 0; i < 100; i++) { 
    console.log(i);
    time_stop(i);
}
function time_stop(time){
    if (time == 100){
        console.log("打印完成100次");
        return "打印完成100次";
    }
}