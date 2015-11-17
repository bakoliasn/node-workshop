function a (){
    console.log("hello world");   
    setTimeout(function(){
        console.log("hello world");
        }, 10000);
}
a();