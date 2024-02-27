const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
    const searchfilde = document.getElementById('searchfilde').value;
    searchfilde.innerText = " "
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchfilde+'&appid=77c51bf0db39c3dc20ad5c7bd7edac99')
        .then(res => res.json())
        .then(data => resultData(data))
})

function resultData(result){
    const areaName = result.name;
    document.getElementById('area-container').innerText = areaName;

    const temp1 = result.main.temp;
    const temp2 = temp1 - 273.15;
    const tempValue = temp2.toFixed()
    document.getElementById('value').innerText = tempValue;

    const  weather = result.weather[0].description;
    document.getElementById('description').innerText = weather;
}



