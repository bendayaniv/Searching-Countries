/// <reference path="jquery-3.4.1.js"/>

(function() {
  $(function() {


    //Calling for all the countries:

    $("#allCountries").click(() => {
      $("#countriesDiv").empty();
      getAllCountries("https://restcountries.eu/rest/v2/all")
        .then(countries => {
            for (let item of countries) {
                const name = `<p>Name: ${item.name}</p>`;
                const topLevelDomain = `<p>Top Level Domain: ${item.topLevelDomain}</p>`;
                const capital = `<p>Capital: ${item.capital}</p>`;
                const currencies = `<p><ul>Currencies:<li>Code - ${item.currencies[0].code}</li>
                                    <li>Name - ${item.currencies[0].name}</li>
                                    <li>Symbol - ${item.currencies[0].symbol}</li></ul></p>`;
                const flag = `<img src="${item.flag}">`;
                const flagDiv = `${flag}`;
                const detailsDiv = `${name}${topLevelDomain}${capital}${currencies}`;
                const fullDetails = `<div class="fullDiv">${flagDiv}<hr>${detailsDiv}</div>&nbsp;`;
                $("#countriesDiv").append(fullDetails);
            }
        })
        .catch(err => alert(err));
    });

    //Getting all the countries function:
    function getAllCountries(url) {
        return new Promise((resolve, reject) => {
            $.getJSON(url, json => resolve(json))
            .fail(err => reject(err));
        });
    }


    //Calling for specific countries: 

    $("#specificCountries").click(() => {
        getSomeCountries("https://restcountries.eu/rest/v2/name/" + $("#specificInput").val())
        .then(countries => {
            $("#countriesDiv").empty();
            for (let item of countries) {
                const name = `<p>Name: ${item.name}</p>`;
                const topLevelDomain = `<p>Top Level Domain: ${item.topLevelDomain}</p>`;
                const capital = `<p>Capital: ${item.capital}</p>`;
                const currencies = `<p><ul>Currencies:<li>Code - ${item.currencies[0].code}</li>
                                    <li>Name - ${item.currencies[0].name}</li>
                                    <li>Symbol - ${item.currencies[0].symbol}</li></ul></p>`;
                const flag = `<img src="${item.flag}">`;
                const flagDiv = `${flag}`;
                const detailsDiv = `${name}${topLevelDomain}${capital}${currencies}`;
                const fullDetails = `<div class="fullDiv">${flagDiv}<hr>${detailsDiv}</div>&nbsp;`;
                $("#countriesDiv").append(fullDetails);
            }
        })
        .catch(err => alert("This country doesn't exist in this web. Try another one!"));
    });

    //Getting specific countries function:
    function getSomeCountries(url) {
        return new Promise((resolve, reject) => {
            $.getJSON(url, json => resolve(json))
            .fail(err => reject(err));
        });
    }

  });
})();