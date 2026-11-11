document.addEventListener('DOMContentLoaded', function () {
  var countryInput = document.getElementById('country');
  var lookupBtn = document.getElementById('lookup');
  var citiesBtn = document.getElementById('lookup-cities');
  var resultDiv = document.getElementById('result');

  // Exercise 3 and 5: send the AJAX request to world.php and show the response.
  function search(extraParams) {
    var country = countryInput.value.trim();
    var url = 'world.php?country=' + encodeURIComponent(country) + extraParams;

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        return response.text();
      })
      .then(function (html) {
        resultDiv.innerHTML = html;
      })
      .catch(function (err) {
        resultDiv.textContent = 'Something went wrong: ' + err.message;
      });
  }

  // Exercise 3: Lookup button, countries
  lookupBtn.addEventListener('click', function () {
    search('');
  });

  // Exercise 5: Lookup Cities button
  citiesBtn.addEventListener('click', function () {
    search('&lookup=cities');
  });

  // Pressing Enter in the search box does a country lookup.
  countryInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      lookupBtn.click();
    }
  });
});
