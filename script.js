console.log("Hello World");
alert("Hello World");
for (let i = 0; i < 100; i++) { 
    console.log(i);
    log_print_hello();
}
function log_print_hello(){
    console.log("Hello World");
    return "打印成功"
}