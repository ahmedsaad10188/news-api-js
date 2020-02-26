/*var alldata=[];
var ahmed = new XMLHttpRequest();
var category="general";
getdata(category);
var links = document.querySelectorAll(".nav-link");
for(var i=0;i<links.length;i++){
links[i].addEventListener("click",function(e){

category=e.target.text;

getdata(category);

})


}

function getdata(category){

    ahmed.open("GET", "https://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=74d8a040d55b4797a92f15dc84294b65")
    ahmed.send();
    ahmed.onreadystatechange = function(){
    
    if(ahmed.readyState==4 && ahmed.status ==200){
    
    alldata=JSON.parse(ahmed.response).articles;
    displaydata();
     console.log(alldata);
    }
    
    
    
    
    }



}









function displaydata(){
var temp=``;
for(var i=0;i<alldata.length;i++){
temp+=` <div class="col-md-3">
<div class="item">
<img src="`+alldata[i].urlToImage+`" class="img-fluid"  alt="">

    <h4>`+alldata[i].title+`</h4>
    <p>`+alldata[i].description+`</p>
</div>
</div>`




}

document.getElementById("rowdata").innerHTML=temp;

}





*/



var httpreq = new XMLHttpRequest();
var category = "general";
var country="eg";
var alldata = [];
var links = document.querySelectorAll(".nav-link");
console.log(links);





for (var i =0 ; i<links.length ; i++)
{

links[i].addEventListener("click",function(e){


category = e.target.text;
getdata(category,country);

})

}

function getcountry(coun)
{

    
    country=coun;
    getdata(category,country);

}
function getdata(category,country)
{
 

    httpreq.open("GET","https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=74d8a040d55b4797a92f15dc84294b65")


    httpreq.send();
    httpreq.onreadystatechange = function(){
    
    if(httpreq.readyState==4 && httpreq.status==200)
    {
    
        alldata= JSON.parse(httpreq.response).articles;
    displaydata();
    }
    
    
    }

}











function displaydata()
{

var temp=``;
for(var i =0 ; i<alldata.length; i++)
{

temp+=`
<div class="col-md-3">
<div class="item">
<img src="`+alldata[i].urlToImage+`" class="img-fluid"  alt="">

    <h4 class="px-3">`+alldata[i].title+`</h4>
    <p class="px-3">`+alldata[i].description+`</p>
</div>
</div>






`


}

document.getElementById("rowdata").innerHTML=temp;

}
































