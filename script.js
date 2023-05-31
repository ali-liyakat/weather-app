const button=document.getElementById("searchBtn");
const input=document.getElementById("city");

const cityname=document.getElementById("cityname");
const time=document.getElementById("time");
const temp=document.getElementById("temp");


async function getdata(cityName) {
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=e8c99ebb2df748bba2892745232805&q=${cityName}&aqi=yes`);
    return await promise.json();
}
button.addEventListener('click', async () => {
    const value=input.value;
    const result =await getdata(value);
    cityname.innerText=`${result.location.name}, ${result.location.region}, -${result.location.country}`;
    time.innerText=result.location.localtime;
    temp.innerText=result.current.temp_c;
});
