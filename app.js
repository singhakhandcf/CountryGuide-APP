const countries = document.querySelector(".countries");
const filterbtn = document.querySelector('.filter button')
const drop = document.querySelector('.drop');
const region = document.querySelectorAll('.region')

async function getcountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);

    res.forEach(element => {
        showcountry(element);
    })
}
getcountry()

filterbtn.addEventListener('click', () => {
    drop.classList.toggle("show")
})
function showcountry(data) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = ` <div class="images">
    <img src="${data.flags.png}" alt="">
</div>
<div class="details">
    <h2 class="countryname">${data.name.common}</h2>
    <p><strong>Population:</strong>${data.population}</p>
    <p class="regionname"><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
</div>`
    countries.appendChild(country)
    country.addEventListener('click', () => {
        showdetails(data)
    })
}
const regionname = document.getElementsByClassName('regionname')
region.forEach(element => {
    element.addEventListener('click', () => {
        Array.from(regionname).forEach(element1 => {

            if (element1.innerText.includes(element.innerText) || element.innerText == "All") {
                element1.parentElement.parentElement.style.display = 'flex';
            }
            else {
                element1.parentElement.parentElement.style.display = 'none';
            }
        })
    })
})
const search1 = document.querySelector('.search i');
const search = document.querySelector('.tosearch');
const input = document.querySelector('.search input')

const toggle = document.querySelector('.toggle');
const moon = document.querySelector('.moon');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    moon.classList.toggle('fas')
})
const countrymodal = document.querySelector('.countrymodal');
function showdetails(data){
    // countrymodal.style.display='none'
    countries.classList.toggle("disp1")
    countrymodal.classList.toggle("disp1")
    search.classList.toggle("disp1")
    console.log("Sex")
    countrymodal.innerHTML=`<button class="back">Back</button>
    <div class="modal">
        <div class="leftmodal">
            <img src="${data.flags.png}" alt="">
        </div>
        <div class="rightmodal">
            <h2>${data.name.common}</h2>
            <div class="r">
                <div class="r1">
                    <p><strong>Native Name:</strong>${data.name.official}</p>
                    <p><strong>Population:</strong>${data.population}</p>
                    <p><strong>Region:</strong>${data.region}</p>
                    <p><strong>Sub Region:</strong>${data.subregion}</p>
                    <p><strong>Capital:</strong>${data.capital}</p>
                </div>
                <div class="r2">
                    <p><strong>Top Level Domain:</strong>${data.name}</p>
                    <p><strong>Currencies:</strong>${data.currencies.name}</p>
                    <p><strong>Languages:</strong>${data.languages.name}</p>
                </div>
            </div>
            <p class="bordercountries">Border Countries:</p>
        </div>
    </div>`
    const back = countrymodal.querySelector('.back')
    back.addEventListener('click', () => {
        console.log("Sex")
        countries.classList.toggle("disp1")
        countrymodal.classList.toggle("disp1")
        search.classList.toggle("disp1")
        countrymodal.innerHTML='';
    })
}

const countryname=document.getElementsByClassName("countryname");

input.addEventListener('input',()=>{
    search1.addEventListener('click',()=>{
        Array.from(countryname).forEach(element1 => {

            if (element1.innerText.toLowerCase().includes(input.value.toLowerCase())) {
                element1.parentElement.parentElement.style.display = 'grid';
            }
            else {
                element1.parentElement.parentElement.style.display = 'none';
            }
        })
    })
    
})