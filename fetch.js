const apiKey = '83cf9e6b4a6420fc7e952e404871b7b4'
const cityName = 'tangail'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
// https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=83cf9e6b4a6420fc7e952e404871b7b4
// .then(res => res.json())
// .then(data => console.log(data))

// const key = "93cabb8e9bbb9fd3cd637493234e2f16f2729a9bcefecde6e67ade15"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
.then(res => res.json())
.then(data => console.log(data)) 