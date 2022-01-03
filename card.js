function checkout(){
    window.location.href="checkout.html";
}
var total;

var item=JSON.parse(localStorage.getItem("food"));
console.log(item);
appendproduct(item);
var pric=document.getElementById("autocardlength");
pric.textContent=`Price:${total}`;


function appendproduct(item){
    item.forEach(function(item){
       // console.log(item);
       var div=document.getElementById("item");
       
       var innerdiv=document.createElement("div");
       innerdiv.setAttribute("id","inner");

       var img=document.createElement("img");
       img.src=item.strCategoryThumb;

       var dishname=document.createElement("h3");
       dishname.textContent=`ITEM NAME:${item.strCategory}`;

       var dishid=document.createElement("h3");
       dishid.textContent=`DISH ID:${item.idCategory}`;

       num=Math.floor(Math.random()*(500-100))+100;

       var price=document.createElement("h3");
       price.textContent=`PRICE:${num}`;
       total+=num;
       
       

       var but=document.createElement("button");
       but.innerHTML="Delet";
       but.setAttribute("id","auto");
       but.addEventListener("click",function(){
           card(item);
       });

       innerdiv.append(img,dishname,dishid,price,but);

       div.appendChild(innerdiv)

       
    });
    function card(s){
        item.splice(s,1)
        localStorage.setItem("food",JSON.stringify(item));
        window.location.reload(true);
        
    }
}
pric.textContent=`Price:450`;