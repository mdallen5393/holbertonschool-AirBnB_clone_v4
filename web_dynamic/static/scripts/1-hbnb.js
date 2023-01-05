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
});
