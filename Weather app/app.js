const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather = document.querySelector("#weather")

//2
const getWeather = async (city) => {
    weather.innerHTML =`<h3>Lodding...</h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    // console.log(response)
    const data = await response.json();
    // console.log(data);
    return showWeather(data);
};

//3

const showWeather = (data) => {
    if (data.cod == "404"){
        weather.innerHTML =`<h2>City Not Found</h2>`
        return;
    }
        weather.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp}℃</h2>
                <h4> ${data.weather[0].main}</h4> 
                
            </div>`
};
//1
form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault()//no reload page on submit 
        // console.log(search.value);
        getWeather(search.value);
    }
); 