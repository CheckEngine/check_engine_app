var verbose = false;

$(document).ready(function() {
  init();
  //event listeners
  $('#homeBtn').on('click', goHome);
  //show disclaimer modal
  $('#disclaimerModal').modal('show');
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
  $el.append('<p id="serverity">' + responseObject.severity + '</p>');
  $el.children().last().addClass(getSeverityClass(responseObject.severity));
  $el.append('<p id="result">' + responseObject.result + '</p>');
  $el.append('<p id="description">' + responseObject.description + '</p>');
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
      showResultDivs();
      displayResults(response.response);
    }, // end success
    error: function(err) {
      if (verbose) console.log(err);
    } // end error
  }); // end ajax
}; // end getCodeInfo

var getSeverityClass = function(severity) {
  if (verbose) console.log('in getSeverityClass', severity);
  var className;
  if (severity === "Keep Driving!") {
    className = 'green';
  } else if (severity === 'Be aware. Needs to be inspected.') {
    className = 'yellow';
  } else if (severity === 'Stop driving!') {
    className = 'red';
  } // end else
  return className;
}; // end getSeverityClass

var goHome = function() {
  console.log('in goHome');
  $('.results').hide();
  $('#codeForm').show();
}; // end goHome

var showResultDivs = function() {
  if (verbose) console.log('in showResultDivs');
  $('.results').show();
  $('#codeForm').hide();
  $('#appendToDom').empty();
}; // end showResultDivs
