
function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
 document.getElementById('txt').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);
}

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}



  
    
