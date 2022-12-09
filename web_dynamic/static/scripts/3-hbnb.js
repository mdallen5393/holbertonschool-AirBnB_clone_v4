$(document).ready(function() {
  let listOfCheckedAmenities = [];

  $('li :checkbox').change( function () {
    const dataName = $(this).attr("data-name");

    if (this.checked) {
      listOfCheckedAmenities.push(dataName);
    } else {
      listOfCheckedAmenities = listOfCheckedAmenities.filter((item) => item !== dataName);
    }
    $('div.amenities h4').text(listOfCheckedAmenities.join(', '));

    getStatus('http://d1eb7851f2e7.7399d2e2.hbtn-cod.io:5001/api/v1/status/');
    places('http://d1eb7851f2e7.7399d2e2.hbtn-cod.io:5001/api/v1/places_search/');
  });
})

function getStatus (url) {
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
}

function places (url) {
  $.post(

  );
}
