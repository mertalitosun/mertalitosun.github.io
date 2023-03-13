const searchBar = document.getElementById("searchBar");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const minmax = document.querySelector(".minmax");


const apiKey = "1556d128250ef68cd638fbf33c0abc5c";

//  hava durumu raporu al
const sehirUrl = "https://api.openweathermap.org/data/2.5/";


// enter a basınca işlem yapma fonk.
const enter = (e) => {
    if(e.keyCode=="13"){
        havaDurumuApi(searchBar.value);
    }
}

const havaDurumuApi = (cityName) =>{
    if(cityName){
        let query = `${sehirUrl}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
        fetch(query)
        .then((response) =>{
            return response.json();
        })
        .then(havaDurumuGoster)
        .catch(hata)
    }
    else{
        alert("Şehir İsmi Boş Bırakılamaz")
    }
    
}

const havaDurumuGoster = (havaDurumu) =>{
    console.log(havaDurumu)
    city.innerHTML = `${havaDurumu.name}, ${havaDurumu.sys.country} `
    
    temp.innerHTML = `${Math.round(havaDurumu.main.temp)}°C`

    desc.innerHTML = `${havaDurumu.weather[0].description}`

    minmax.innerHTML = `${Math.round(havaDurumu.main.temp_min)}°C / ${Math.round(havaDurumu.main.temp_max)}°C`
}

const hata = () =>{
     alert("Şehir İsmini Yanlış Yazdınız. Lütfen Tekrar Deneyiniz...")
     searchBar.value = "";
}

searchBar.addEventListener("keypress", enter);
