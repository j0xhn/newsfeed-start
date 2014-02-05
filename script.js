$(document).ready(function() {

	$.ajax('https://api.parse.com/1/classes/NewsItem', 
  {
    beforeSend: function(request) {
      request.setRequestHeader('X-Parse-Application-Id', 'qRbiNmQzpc7lRx3WKc4Wxza3pnEZo4t96Bj8PIvY');
            request.setRequestHeader('X-Parse-REST-API-Key', '3Zb3SzHxy1m8PJD8CLv5daRBaBdCxqS4t8zSGPFt');
        }
    }
).done(function(response) {
	console.log(response);

	var resultsArray = response.results;

  // populate list here with jQuery
  $.each(resultsArray, function(index, article){
  	// console.log(index, article);

  	
  	$('.newsfeed').append('<div class="newsitem"> <h1>' + article.title + '</h1> <br> <p>' + article.description + '</p></div>' );
  })

});

$('button').click(function(){

//creates JSON Object

	var newTitle = $('#newTitle').val(),
		newDescription = $('#newDescription').val()
	var newJsonObject = JSON.stringify({title: newTitle, description: newDescription});

// sends it to parse

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.parse.com/1/classes/NewsItem", true);
xhr.setRequestHeader("X-Parse-Application-Id", "qRbiNmQzpc7lRx3WKc4Wxza3pnEZo4t96Bj8PIvY");
xhr.setRequestHeader("X-Parse-REST-API-Key", "3Zb3SzHxy1m8PJD8CLv5daRBaBdCxqS4t8zSGPFt");
xhr.setRequestHeader("Content-Type", "application/json");
 
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var result = JSON.parse(xhr.responseText);
    if (result.objectId) {
      alert("saved an object with id: " + result.objectId);
    }
  }
}
   
xhr.send(newJsonObject);

console.log('button click complete')
});

});