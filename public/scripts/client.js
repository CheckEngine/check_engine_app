$(document).ready(function() {

  init();
});

var init = function() {
  console.log('in init');
  getCodeInfo();
}; // end init

var getCodeInfo = function(event) {
  console.log('in getCodeInfo');
  //prevent page refresh
  event.preventDefault();
  //receive code from user input
  //var codeIn = 'P0135';
  var codeIn = $('#codeIn').val();
  console.log(codeIn);
  //construct urlString
  urlString = '/obds/' + codeIn;
  console.log(urlString);
  //set get route
  $.ajax({
    type: 'GET',
    url: urlString,
    success: function(response) {
      console.log(response);
    }, // end success
    error: function(err) {
      console.log(err);
    } // end error
  }); // end ajax
}; // end getCodeInfo
