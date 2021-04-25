fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>countriesAppend(data));

const countriesAppend=countryes=>{
    const countriesDiv=document.getElementById("country");
    countryes.forEach(country=>{
        const countryDiv=document.createElement('div');
        countryDiv.className="countryClass"
        countryDiv.innerHTML= `
        <h3>${country.name}</h3>
        <span>${country.capital}</span>
        <p>population:${country. population}</p>
     <button onclick="displayCountryDetails('${country.name}')">details</button>
        
        `
        countriesDiv.appendChild(countryDiv);

    });


}
const displayCountryDetails = details => {
const url=`https://restcountries.eu/rest/v2/name/${details}`
fetch(url)
.then(res=>res.json())
.then(data=>renderCountryInfo(data[0]));



}
const renderCountryInfo=countryI=>{
    const countryDiv=document.getElementById('countryDetail');

    countryDiv.innerHTML=`
       <h1>country:${countryI.name}</h1>
       <h3>native name:${countryI.nativeName}</h3>
       <p>capital:${countryI.capital}</p>
       <p>area:${countryI.area}</p>
       <p>continent:${countryI.region}</p>
     <img src=${countryI.flag}>


       
       
       `

     
        
   
}