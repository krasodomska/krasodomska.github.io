var greeting,showText=function(e,t,l,o){l<t.length&&($(e).append(t[l++]),setTimeout(function(){showText(e,t,l,o)},o))};function openCv(){document.getElementById("cv").style.width="100%"}function closeCv(){document.getElementById("cv").style.width="0%"}$(function(){showText("#show","I'm Agnieszka Krasodomska",0,50)});var time=(new Date).getHours();function initMap(){new google.maps.Map(document.getElementById("map"),{center:{lat:50.0691411178046,lng:14.40562390000008},zoom:12,styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]})}greeting=time<10?"Good morning":time<20?"Good day":"Good evening",document.getElementById("hello").innerHTML=greeting,$(document).ready(function(){$(".navbar a, footer a[href='#myPage']").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},900,function(){window.location.hash=t})}}),$(window).scroll(function(){$(".slideanim").each(function(){$(this).offset().top<$(window).scrollTop()+600&&$(this).addClass("slide")})})}),google.maps.event.addDomListener(window,"load",initialize);