$(document).ready(function() {
  init();
});

var init = function() {
  console.log('in init');
}; // end init

var displayResults = function() {
  console.log('in displayResults');
  var $el = $('#displayDiv');
  //$el.append
}; // end displayResults

var getCodeInfo = function(event) {
  console.log('in getCodeInfo');
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
      console.log(response);
      displayResults();
    }, // end success
    error: function(err) {
      console.log(err);
    } // end error
  }); // end ajax
}; // end getCodeInfo
