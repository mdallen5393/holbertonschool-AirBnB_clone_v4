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
  });
})

function updateAmenityH4 (amenityIdDict) {
  myList = [];
  for (item of amenityIdDict) {
    myList.push(item);
  }
  $('div.amenities h4').text(myList);
}

$.get(url, function (data) {
  $('div#api_status').
})
