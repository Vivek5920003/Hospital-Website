// Function to generate the quote
function generateQuote() {
  var patientName = document.getElementById("patient-name").value;
  var email = document.getElementById("email").value;

  // Perform validation and generate the quote
  if (patientName && email) {
    // Calculate the quote based on user input
    var quoteAmount = calculateQuote(patientName, email);

    // Display the quote result
    var quoteResultElement = document.getElementById("quote-result");
    quoteResultElement.textContent = "Your quote: $" + quoteAmount;
  } else {
    // Display an error message if required fields are empty
    alert("Please fill in all the required fields.");
  }
}

// Function to calculate the quote based on user input
function calculateQuote(patientName, email) {
  // Add your custom logic here to calculate the quote amount based on patientName and email
  // You can use any formula or business rules specific to your healthcare provider firm
  // For demonstration purposes, a random quote amount is generated between $100 and $500
  var quoteAmount = Math.floor(Math.random() * 401) + 100;

  return quoteAmount;
}
