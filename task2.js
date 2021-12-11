// 2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

//solution
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.name+":"+data.flag);
}