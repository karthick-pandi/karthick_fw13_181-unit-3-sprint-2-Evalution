var a;
    var b;
    var c;
    var d;
    function submit(){
        a=setTimeout(function(){
            clearTimeout(a);
            alert("accepted your order");
        },2000);

        b=setTimeout(function(){
            clearTimeout(b);
            alert("wait for few minutes");
        },5000);

        c=setTimeout(function(){
            clearTimeout(c);
            alert("your order is parsel");
        },9000);
    }