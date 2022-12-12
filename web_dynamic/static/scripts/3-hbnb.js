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


  });
  getStatus('http://cebc42632524.3ebb58fb.hbtn-cod.io:5001/api/v1/status/');
  places('http://cebc42632524.3ebb58fb.hbtn-cod.io:5001/api/v1/places_search/');
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
  $.ajax({
    url: url,
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({}),
    success: function(data) {
      for (const place of data) {
        $.get('http://cebc42632524.3ebb58fb.hbtn-cod.io:5001/api/v1/users/' + place.user_id, function (userData) {
          let guestsPlural = '';
          if (place.max_guest != 1) {
            let guestsPlural ='s';
          } 
          let roomsPlural = ''
          if (place.number_rooms != 1) {
            let roomsPlural ='s';
          }
          let bathroomPlural = ''
          if (place.number_bathrooms != 1) {
            let bathroomPlural ='s';
          } 
          let html = `<article>
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">$${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest} Guest${guestsPlural}</div>
                  <div class="number_rooms">${place.number_rooms } Bedroom${roomsPlural}</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathroom${bathroomPlural}</div>
          </div>
          <div class="user">
                  <b>Owner:</b> ${userData.first_name} ${userData.last_name}
                </div>
                <div class="description">
            ${place.description}
                </div>
            </article>`;
        $('.places').append(html);
        });
      }
    }
  });
}
