$(document).ready(function() {
  const amenityIdList = {};
  const amenityClicked = $('ul li input');
  amenityClicked.on('click', function (event) {
    if (amenityIdList[amenityClicked.attr('data-id')]) {
      delete amenityIdList[amenityClicked.attr('data-id')];
    } else {
      amenityIdList[amenityClicked.attr('data-id')] = amenityClicked.attr('data-name');
    }

    updateAmenityH4();
  });
})

function updateAmenityH4 (amenityIdList) {
  myList = [];
  for (item of amenityIdList) {
    myList.push(item);
  }
  $('div.amenities h4').text(myList);
}