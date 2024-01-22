async function getData() {
  let val = document.getElementById("city_name").value;
  let wrong = document.getElementById("weather");
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=d715cea3de68cffae293e7c69146a49d&units=metric`
  );
  data = await data.json();

  try {
    let temp = document.getElementById("temp");
    if (data.main.temp < 17) {
      temp.innerHTML = temp.innerHTML + "<span>&#129398;      </span>";
    } else {
      temp.innerHTML = temp.innerHTML + "<span>&#9728;&#65039;</span>";
    }
    document.getElementById("temperature").innerHTML = data.main.temp;
    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("windspeed").innerHTML = data.wind.speed;
  } catch (error) {
    wrong.innerHTML =
      "<p>Somthing went wrong</p><p>Check server and try again &#10060;</p> <button onclick='window.location.reload()'>relode</button";
    wrong.style.backgroundColor = "red";

    console.log(error, "error");
  }

  // console.log(data);
}

// let flag =  ''
