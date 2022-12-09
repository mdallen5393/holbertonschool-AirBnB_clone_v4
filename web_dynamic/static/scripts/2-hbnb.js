$(document).ready(function() {
  const amenityIdDict = {};
  const amenityClicked = $('ul li input');
  amenityClicked.on('click', function (event) {
    if (amenityIdDict[amenityClicked.attr('data-id')]) {
      delete amenityIdDict[amenityClicked.attr('data-id')];
    } else {
      amenityIdDict[amenityClicked.attr('data-id')] = amenityClicked.attr('data-name');
    }
    updateAmenityH4();
    getStatus('http://0.0.0.0:5001/api/v1/status/');
  });
})

function updateAmenityH4 (amenityIdDict) {
  myList = [];
  for (item of amenityIdDict) {
    myList.push(item);
  }
  $('div.amenities h4').text(myList);
}

function getStatus (url) {
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
}
