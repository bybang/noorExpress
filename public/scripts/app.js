// Client facing scripts here
$(document).ready(function() {
  // Bootstrap JS function didn't work, manually adding functions for toggle buttons
  $('.navbar-toggler').click(() => $('.collapse').toggleClass('show'));
  $('#dropdownMenuButton').click(() => $('#sortDropdownMenu').toggleClass('show'));

  // Sort By Price
  $('.dropdown-item-low')$.post('/filterByPrice/:highToLow')
  $('.dropdown-item-low')$.post('/filterByPrice/:highToLow')

  //Adding categories
  $(.'category-inner').
});
