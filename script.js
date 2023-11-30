fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=497ae336dc8b3d602413d28a2c4f1dfa&units=metric')
.then( res => res.json())
.then(data => console.log(data))