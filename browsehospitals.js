// Function to fetch and display hospitals
function browseHospitals() {
  // Fetch hospital data from the API or local data source
  fetch('api/hospitals')
    .then(response => response.json())
    .then(data => {
      // Get the hospital container element
      var hospitalContainer = document.getElementById('hospital-container');
      
      // Loop through the hospital data and create HTML elements for each hospital
      data.forEach(hospital => {
        // Create a div element for each hospital
        var hospitalDiv = document.createElement('div');
        hospitalDiv.classList.add('hospital');

        // Create elements for hospital information
        var nameElement = document.createElement('h3');
        nameElement.textContent = hospital.name;

        var addressElement = document.createElement('p');
        addressElement.textContent = hospital.address;

        var phoneElement = document.createElement('p');
        phoneElement.textContent = 'Phone: ' + hospital.phone;

        // Append hospital information elements to the hospital div
        hospitalDiv.appendChild(nameElement);
        hospitalDiv.appendChild(addressElement);
        hospitalDiv.appendChild(phoneElement);

        // Append the hospital div to the hospital container
        hospitalContainer.appendChild(hospitalDiv);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call the browseHospitals function to load and display the hospitals
browseHospitals();
