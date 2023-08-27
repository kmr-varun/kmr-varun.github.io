

searchbtn = document.getElementById('search');




searchbtn.addEventListener('click', function()
{
    var city = document.getElementById('weather_city').value;

  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=X6ZU9K7LESQD7THWG4U89CMM3&contentType=json')
  .then(res => res.json())


  .then(data => 
  {
    document.getElementById('lcity').innerHTML = ' ' + data['address'];
    document.getElementById('ldate').innerHTML = data['days']['0']['datetime'];
    document.getElementById('weather_type').innerHTML = data['days']['0']['conditions'];
    document.getElementById('tempt').innerHTML = data['days']['0']['temp'] + '&deg;';
    document.getElementById('press').innerHTML = data['days']['0']['pressure'] + ' M/B';
    document.getElementById('humid').innerHTML = data['days']['0']['humidity'] + '%';
    document.getElementById('wind').innerHTML = data['days']['0']['windspeed'] + ' M/S';
    document.getElementById('wicon').src = 'icons/' + data['days']['0']['icon'] + '.png';

    document.getElementById('all').style.opacity = 1;
    

  })

  .catch(err => alert('You entered Wrong city name'))
})