navigator.geolocation.getCurrentPosition((location) => {
    console.log(location);
    $.ajax({
  url: 'api/v1/weather',
  type: 'GET',
  data: { lat: location.coords.latitude, lng: location.coords.longitude } ,
  contentType: 'application/json; charset=utf-8',
  success: function (response) {
      if ($('.weather').length) {
        $('.weather').replaceWith("<h3 class=\"weather\">" + response.currently.temperature + "</h3>");
      } else {
        $('.title-2').after("<h3 class=\"weather\">" + response.currently.temperature + "</h3>");
      }
    console.log(response);
  },
  error: function (error) {
    console.log(error);
  }
});
    
})



function showAwesomeAlert(event) {
    confirm('Are you sure you can handle the awesome?')
};
  
$('.title-1').on('click', showAwesomeAlert);

function getRandomColor(){
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function changeTitleColor(event) {
    var randColor = getRandomColor();
    console.log("color is" + randColor)
    $('.title-2').css("color", randColor);
};

$('h2').on('click', changeTitleColor);
