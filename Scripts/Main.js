var hey = document.getElementById("heyListenAudio");
var link = document.getElementById("linkAudio");

$("#heyListen").click(function(){
	if(hey.duration > 0){
		hey.currentTime = 0;
		hey.play();
	} 
	else{
		hey.play();	
	}
})

$("#submitBtn").click(function submitted(){
	var zipcode = document.getElementById("zipBox").value;

	if(zipcode.length < 5){
		alert("Five numbers required");
	} else{
        var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + $("#zipBox").val() + '&appid=bbba06f458a00923464086f70d10d0ed';
		$.getJSON(url,function(result){
			$("#weatherResults").css("display","block");
			$("#weatherInfo").html("Current Weather:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + result.weather[0].description + ".<br />Current Humidity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + result.main.humidity + "&#37;<br />Current Wind Speed:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + result.wind.speed + " mph.");
			$("#cityName").html(result.name);
			link.play();
			$("#linkSpin").animate({"left":"430px"},100);
			$("#linkSpin").animate({"left":"500px"},100);
		});
	}
})
