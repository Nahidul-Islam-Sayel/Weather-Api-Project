const btn= document.getElementById("button1");
btn.addEventListener("click",function(){
  const loc= document.getElementById("location1").value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+loc+'&appid=49bc3aab866d1646f2f4a93284770ddc')
  .then(res => res.json())
  .then(data=>{
    const cityname= data.name;
    const tem= data.main.temp;
    const temp=tem-273.15;
    const haz=data.weather[0].description;
    document.getElementById("temp").innerText=temp.toFixed(2);
    document.getElementById("city").innerText=cityname;
    document.getElementById("lead1").innerText=haz;

  })
  .catch(res=>alert("City name is Wrong"))
})