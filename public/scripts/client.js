var verbose = false;

$(document).ready(function() {
  init();
});

var init = function() {
  if (verbose) console.log('in init');
}; // end init

var clearForm = function() {
  if (verbose) console.log('in clearForm');
  $('#codeIn').val('');
}; // end clearForm

var displayResults = function(responseObject) {
  if (verbose) console.log('in displayResults', responseObject);
  var $el = $('#appendToDom');
  $el.append('<p>' + responseObject.severity + '</p>');
  $el.append('<p>' + responseObject.result + '</p>');
  $el.append('<p>' + responseObject.description + '</p>');
}; // end displayResults

var getCodeInfo = function(event) {
  if (verbose) console.log('in getCodeInfo');
  //prevent page refresh
  event.preventDefault();
  //receive code from user input
  var codeIn = $('#codeIn').val();
  //construct urlString
  urlString = '/obds/' + codeIn;
  //set get route
  $.ajax({
    type: 'GET',
    url: urlString,
    success: function(response) {
      if (verbose) console.log(response);
      clearForm();
      displayResults(response.response);
    }, // end success
    error: function(err) {
      if (verbose) console.log(err);
    } // end error
  }); // end ajax
}; // end getCodeInfo
