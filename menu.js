function gotocard(){
    window.location.href="card.html";
}
getproduct();
async function getproduct(){
    try{
        var res=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    var data=await res.json();
    console.log(data.categories);
    appendproduct(data.categories);
    }catch(err){
        console.log(err);
    }
}
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

       var but=document.createElement("button");
       but.innerHTML="autocard";
       but.setAttribute("id","auto");
       but.addEventListener("click",function(){
           card(item);
       });

       innerdiv.append(img,dishname,dishid,price,but);

       div.appendChild(innerdiv)

       
    });
}

function card(item){
    var arr=JSON.parse(localStorage.getItem("food")) || [];
    arr.push(item);
    localStorage.setItem("food",JSON.stringify(arr));
    console.log(arr);

    var length=document.getElementById("autocardlength");
    length.textContent=`Autocard:${arr.length}`;
}