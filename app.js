let BASE_URL = `https://restcountries.com/v3.1/all`;
let FILTER_RESPONSE = `https://restcountries.com/v3.1/all?fields=name,capital,currencies
`;
let dropdowns = document.querySelectorAll(".dropdown select");
let h1 = document.querySelector("#h1");
let p1 = document.querySelector("#p1");
let capital = document.querySelector("#capital");
let region = document.querySelector("#region");
let subregion = document.querySelector("#subregion");
let languages = document.querySelector("#languages");
let latlng = document.querySelector("#latlng");
let population = document.querySelector("#population");
let car = document.querySelector("#car");
let timezones = document.querySelector("#timezones");
let continents = document.querySelector("#continents");
let coatOfArms = document.querySelector("#coatOfArms");
let startOfWeek = document.querySelector("#startOfWeek");

const fetchdata = async () => {
    let response = await fetch(BASE_URL);
    let data = await response.json();
    // console.log(data);
    let objArray = data;
    let size = objArray.length;
    // console.log(size);

    dropdown(data, size);
}

const dropdown = (data, size) => {
    for (let select of dropdowns) {
        for (let i = 0; i < size; i++) {
            let country = data[i].name.common;
            // console.log(country);
            let fullname = data[i].name.official;
            // console.log(fullname);
            let getcapital = data[i].capital;
            // console.log(capital);
            let getregion = data[i].region;
            // console.log(region);
            let getsubregion = data[i].subregion;
            // console.log(subregion);

            let getlanguages = data[i].languages;
            for (const element in languages) {
                // console.log(element);
            }

            let getlatlng = data[i].latlng;
            // console.log(latlng);
            let getpopulation = data[i].population;
            // console.log(population);
            let carsigns = data[i].car.signs;
            // console.log(carsigns);
            let carside = data[i].car.side;
            // console.log(carside);
            let gettimezones = data[i].timezones;
            // console.log(timezones);
            let getcontinents = data[i].continents;
            // console.log(continents["0"]);
            let getflags = data[i].flags.png;
            // console.log(flags);
            let getcoatOfArms = data[i].coatOfArms.png;
            // console.log(coatOfArms);
            let getstartOfWeek = data[i].startOfWeek;
            // console.log(startOfWeek);
            

            // adding the country in the dropdown
            let option = document.createElement('option');
            option.innerText = country;
            option.value = country;
            select.append(option);
            if (data[i].name.common === "India") {
                option.selected = true;
                p1.innerText = `Fullname: ${fullname}`;
               
                const getgetcapital = getcapital["0"]
                console.log("capital: ",getgetcapital);
                capital.innerText = getgetcapital;
                region.innerText = getregion;
                subregion.innerText = getsubregion;
                for (const element in getlanguages) {
                    console.log("lan: ", element);
                    languages.innerText = languages.innerText + getsubregion + '\n';
                }
                const lat = getlatlng["0"];
                const log = getlatlng["1"];
                latlng.innerText = `latitude: ${lat} \n longitude: ${log}`;
                population.innerText = getpopulation;
                car.innerText = `carsigns: ${carsigns} \n carside: ${carside}`;
                timezones.innerText = gettimezones;
                const getgetcontinents = getcontinents["0"]
                console.log("getgetcontinents: ", getgetcontinents);
                continents.innerText = getgetcontinents;
                coatOfArms.innerText = getcoatOfArms;
                startOfWeek.innerText = getstartOfWeek;


            }
        }
    select.addEventListener("change" , (evt)=> {
        displayInfo(evt.target, data);
    })
    }
    
}

const displayInfo = (country, data) => {
    let countryname = country.value
    console.log(countryname)
    const selectedCountryData = data.find((country) => country.name.common === countryname);

    if (selectedCountryData) {
        // Extract the required information

            const country = selectedCountryData.name.common;
            // console.log(country);
            h1.innerText = country;

            const fullname = selectedCountryData.name.official;
            // console.log(fullname);
            p1.innerText = `Fullname: ${fullname}`;

            const getcapital = selectedCountryData.capital;
            const getgetcapital = getcapital["0"]
            console.log("capital: ",getgetcapital);
            capital.innerText = getgetcapital;

            const getregion = selectedCountryData.region;
            console.log("region:", getregion);
            region.innerText = getregion;

            const getsubregion = selectedCountryData.subregion;
            console.log("subregion:", getsubregion);
            subregion.innerText = getsubregion;

            const getlanguages = selectedCountryData.languages;
            for (const element in getlanguages) {
                console.log("lan: ", element);
                languages.innerText = languages.innerText + getsubregion;

            }

            const getlatlng = selectedCountryData.latlng;
            console.log("getlatlng:", getlatlng);
            const lat = getlatlng["0"];
            const log = getlatlng["1"];
            latlng.innerText = `latitude: ${lat} \n longitude: ${log}`;


            const getpopulation = selectedCountryData.population;
            console.log("population: ", getpopulation);
            population.innerText = getpopulation;

            const carsigns = selectedCountryData.car.signs;
            console.log("carsigns:", carsigns);
            const carside = selectedCountryData.car.side;
            console.log(carside);
            car.innerText = `carsigns: ${carsigns} \n carside: ${carside}`;

            const gettimezones = selectedCountryData.timezones;
            console.log("timezones: ", gettimezones);
            timezones.innerText = gettimezones;

            const getcontinents = selectedCountryData.continents;
            const getgetcontinents = getcontinents["0"]
            console.log("getgetcontinents: ", getgetcontinents);
            continents.innerText = getgetcontinents;


            // const flags = selectedCountryData.flags.png;
            // console.log(flags);

            const getcoatOfArms = selectedCountryData.coatOfArms.png;
            console.log("coatOfArms:", getcoatOfArms);
            coatOfArms.innerText = getcoatOfArms;

            const getstartOfWeek = selectedCountryData.startOfWeek;
            console.log("startOfWeek:", getstartOfWeek);
            startOfWeek.innerText = getstartOfWeek;


    } else {
        console.log('Data not found for the selected country.');
    }
}


fetchdata();
