$( ".navbar__cross" ).hide();
$( ".navbar__hamburger-menu" ).hide();

$( ".navbar__hamburger" ).click(function() {
  $( ".navbar__hamburger-menu" ).slideToggle( "slow", function() {
      $( ".navbar__hamburger" ).hide();
      $( ".navbar__cross" ).show();
    });
});

$( ".navbar__cross" ).click(function() {
  $( ".navbar__hamburger-menu" ).slideToggle( "slow", function() {
    $( ".navbar__cross" ).hide();
    $( ".navbar__hamburger" ).show();
  });
});

// Check if it is an iDevice
var _isOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

if (_isOS) {
  $('.parallax').addClass('is-os');
} 