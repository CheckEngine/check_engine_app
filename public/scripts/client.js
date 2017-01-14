$(document).ready(function() {
  init();
});

var init = function() {
  console.log('in init');
  getCodeInfo();
}; // end init

var getCodeInfo = function() {
  console.log('in getCodeInfo');
  //set get route
  $.ajax({
    type: 'GET',
    url: '/obds',
    success: function(response) {
      console.log(response);
    }, // end success
    error: function(err) {
      console.log(err);
    } // end error
  }); // end ajax
}; // end getCodeInfo
