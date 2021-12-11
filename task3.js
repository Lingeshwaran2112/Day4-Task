

//3 .	Use the same rest countries and print all countries name, region, sub region and population

//solution
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.name+":"+data.region+":"+data.subregion+":"+data.population);
}