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
  //set VIN
  $('#vinIn').val('1HGCM82633A004352');
}; // end init

var clearForm = function() {
  if (verbose) console.log('in clearForm');
  $('#codeIn').val('');
}; // end clearForm

var displayResults = function(responseObject) {
  if (verbose) console.log('in displayResults', responseObject);
  var $el = $('#appendToDom');
  $el.append('<p id="severity">' + responseObject.severity + '</p>');
  $el.children().last().addClass(getSeverityClass(responseObject.severity));
  $el.append('<p id="result">' + responseObject.result + '</p>');
  $el.append('<p id="description">' + responseObject.description + '</p>');
  console.log('result-->', responseObject.result);
  var result = responseObject.result;
  result = encodeURI(result);
  console.log('result after replace-->', result);
  $el.append('<a target="_blank" href="https://www.google.com/#q='+result+'"><button class="btn">Learn More</button></a>');
  //set link attr of sendDiagnosticLink in footer
  //sms:/* phone number here */?body=/* body text here */
  // $('#sendDiagnosticLink').attr('href', 'sms://1112221234:body="'+result+'"');
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
