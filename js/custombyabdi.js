$(document).ready(function(){
  console.log('ready');
  // new Cleave('.inputThreeDigit', {
  //     blocks: [3],
  //     numericOnly: true,
  // });

  $('#daterange-btn').on('click', function(){
      $('.daterange-input').focus();
  })
  $('.daterange-input').daterangepicker({
    locale: {
      format: 'YYYY-MM-DD'
    }
  });

  $(document).on('click', '#checkboxAll', function(){
    $('#deleteChecked').css('cursor','default');
    $('#showChecked').css('cursor','default');
    $('#hideChecked').css('cursor','default');
    $('#deleteChecked').css('cursor','default');
    if ($('#checkboxAll').is(':checked')) {
      $('.checkboxSelected').prop('checked', true);
    }else{
      $('.checkboxSelected').prop('checked', false);
    }
  });

  $(document).on('change', '.checkboxSelected, #checkboxAll', function(){
    var checkAll = $('.checkboxSelected').filter(':checked').length;
    if (checkAll == $('.checkboxSelected').length) {
      $('#checkboxAll').prop('checked', true);
    }else{
      $('#checkboxAll').prop('checked', false);
    }

    if (checkAll > 0) {
      $('#deleteChecked').prop("disabled", false);
      $('#deleteChecked').css('cursor', 'pointer');
      
      $('#showChecked').prop("disabled", false);
      $('#showChecked').css('cursor', 'pointer');
      
      $('#hideChecked').prop("disabled", false);
      $('#hideChecked').css('cursor', 'pointer');

    }else{
      $('#deleteChecked').prop("disabled", true);
      $('#deleteChecked').css('cursor', 'not-allowed');

      $('#showChecked').prop("disabled", true);
      $('#showChecked').css('cursor', 'pointer');
      
      $('#hideChecked').prop("disabled", true);
      $('#hideChecked').css('cursor', 'pointer');
    }
  });

  $('.btn-edit-modal').on('click', function(){
    window.location.href='manage-room-edit.html';
  });

  var dataSelect2 = [
      {
          id: 0,
          text: 'enhancement'
      },
      {
          id: 1,
          text: 'bug'
      },
      {
          id: 2,
          text: 'duplicate'
      },
      {
          id: 3,
          text: 'invalid'
      },
      {
          id: 4,
          text: 'wontfix'
      }
  ];

  $('.select2').select2({
    placeholder: "Select an option",
    allowClear: true,
    data: dataSelect2,
  });

  $('.room-size').inputmask({"mask": "999[M2]" });
  $(".number-bed, .max-numextrabed").inputmask({"mask": "999" });

  // $('.btn-close-modal').on('click', function(){
  //   $('.his-modal , .his-modal-bg').fadeOut("slow");
  // });
});

/*=====================
Manage Bookings
=====================*/
$(document).ready(function(){
  console.log('ready bookings'); 

  $(document).on('click', '.manageBookingDetails', function(){
    window.location.href='manage-booking-details.html', '_blank';
    // window.open('manage-bookings-details.html', '_blank');
  });

  var bookingDateFilterCheck = function(){
    if ($('#checkboxBookingDateFilter').is(':checked')) {
      $('#inputBookingDateFilter').prop('disabled', false);
      $('#inputBookingDateFilter').css('cursor', '');
      $('#inputBookingDateFilter').removeClass('text-muted');
      $('#inputBookingDateFilter').closest('div.d-flex').children('span').removeClass('text-muted');
      $('#inputBookingDateFilter').daterangepicker({
          locale: {
              format: "YYYY-MM-DD"
          }
      });
    }else{  
      $('#inputBookingDateFilter').prop('disabled', true);
      $('#inputBookingDateFilter').val('Booking Date');
      $('#inputBookingDateFilter').css('cursor', 'not-allowed');
      $('#inputBookingDateFilter').addClass('text-muted');
      $('#inputBookingDateFilter').closest('div.d-flex').children('span').addClass('text-muted');

    }
  }

  $(document).on('change', '#checkboxBookingDateFilter', function(){
    bookingDateFilterCheck();
  });

  bookingDateFilterCheck()
  
  var checkinDateFilterCheck = function(){
    if ($('#checkboxCheckinDateFilter').is(':checked')) {
      $('#inputCheckinDateFilter').prop('disabled', false);
      $('#inputCheckinDateFilter').css('cursor', '');
      $('#inputCheckinDateFilter').removeClass('text-muted');
      $('#inputCheckinDateFilter').closest('div.d-flex').children('span').removeClass('text-muted');
      $('#inputCheckinDateFilter').daterangepicker({
        locale: {
            format: "YYYY-MM-DD"
          }
      });
    }else{  
      $('#inputCheckinDateFilter').prop('disabled', true);
      $('#inputCheckinDateFilter').css('cursor', 'not-allowed');
      $('#inputCheckinDateFilter').val('Check-In Date');
      $('#inputCheckinDateFilter').addClass('text-muted');
      $('#inputCheckinDateFilter').closest('div.d-flex').children('span').addClass('text-muted');
    }
  }

  $('#daterange-btn-checkin').on('click', function(){
      $('#inputCheckinDateFilter').focus();
  })

  $(document).on('change', '#checkboxCheckinDateFilter', function(){
    checkinDateFilterCheck();
  });

  checkinDateFilterCheck()

  var checkoutDateFilterCheck = function(){
      if ($('#checkboxCheckoutDateFilter').is(':checked')) {
        $('#inputCheckoutDateFilter').prop('disabled', false);
        $('#inputCheckoutDateFilter').css('cursor', '');
        $('#inputCheckoutDateFilter').removeClass('text-muted');
        $('#inputCheckoutDateFilter').closest('div.d-flex').children('span').removeClass('text-muted');
        $('#inputCheckoutDateFilter').daterangepicker({
          locale: {
              format: "YYYY-MM-DD"
            }
        });
      }else{  
        $('#inputCheckoutDateFilter').prop('disabled', true);
        $('#inputCheckoutDateFilter').css('cursor', 'not-allowed');
        $('#inputCheckoutDateFilter').val('CheckOut Date');
        $('#inputCheckoutDateFilter').addClass('text-muted');
        $('#inputCheckoutDateFilter').closest('div.d-flex').children('span').addClass('text-muted');

      }
    }

    $('#daterange-btn-checkout').on('click', function(){
        $('#inputCheckoutDateFilter').focus();
    })

    $(document).on('change', '#checkboxCheckoutDateFilter', function(){
      checkoutDateFilterCheck();
    });

    checkoutDateFilterCheck()

  $('.lock').css('cursor', 'pointer');

  $(document).on('click', '.lock', function(){
    if ($(this).text() == 'lock') {
      $(this).text('lock_open_right');
    }else{
      $(this).text('lock');
    }
  })

  $(document).on('click', '.confirmation-number', function(){
    if ($(this).text() == 'confirmation_number') {
      $(this).text('done_outline');
      $(this).removeClass('red');
      $(this).addClass('green');
      $(this).css('cursor', 'default');
    }
  })

  $('.name-bookings').popover({
    // title: 'Abdi World',
    placement: 'top',
    trigger: 'hover',
    sanitize: false,
    html: true,
    content: function(){
      var nameBooking = $(this).text().split(' ');
      var nameBookingHtml = 
                            `<table class="d-flex">
                                <div style="width:100%">
                                  <tr>
                                    <th>First Name</th>
                                    <th>&nbsp;:&nbsp;</th>
                                    <td>`+nameBooking[0]+`</td>
                                  </tr>
                                  <tr>
                                    <th>Last Name</th>
                                    <th>&nbsp;:&nbsp;</th>
                                    <td>`+nameBooking[1]+`</td>
                                  </tr>
                                  <tr>
                                    <th>Nationality</th>
                                    <th>&nbsp;:&nbsp;</th>
                                    <td>Japan</td>
                                  </tr>
                                </div>
                            </table>`;
                            // `First Name : `+nameBooking[0]+
                            // ` <br> Last Name : `+nameBooking[1]+
                            // ` <br> Nationality : Japan`;
      return nameBookingHtml;
    },
  });

  $('.numberOfRooms').popover({
    // title: 'Abdi World',
    placement: 'left',
    trigger: 'hover',
    sanitize: false,
    html: true,
    content: function(){
      var nameRoom = $(this).text();
      var roomHtml = 
                            `<table class="d-flex">
                                <div style="width:100%">
                                  <tr>
                                    <th>`+nameRoom+`</th>
                                    <th>&nbsp;:&nbsp;</th>
                                    <td>N/A</td>
                                  </tr>
                                </div>
                            </table>`;
                            // `First Name : `+nameBooking[0]+
                            // ` <br> Last Name : `+nameBooking[1]+
                            // ` <br> Nationality : Japan`;
      return roomHtml;
    },
  });

  $('.specialRequest').popover({
    // title: 'Abdi World',
    placement: 'left',
    trigger: 'hover',
    sanitize: false,
    html: true,
    content: function(){
      var specialRequest = 
                            `<table class="d-flex">
                                <div style="width:100%">
                                  <tr>
                                    <th>Special Request</th>
                                    <th>&nbsp;:&nbsp;</th>
                                    <td>N/A</td>
                                  </tr>
                                  <tr>
                                    <th>Additional Room Request</th>
                                    <th>&nbsp;:&nbsp;</th>
                                    <td>N/A</td>
                                  </tr>
                                </div>
                            </table>`;
      return specialRequest;
    },
  });

  $('.hotelConfirmation').popover({
    container: 'body',
    placement: 'left',
    sanitize: false,
    html: true,
    content: function(){
      return `
                <div class="d-flex" style="font-size: 0.85rem;">
                    <input type="text" class="form-control rounded-input-addon fs-85">
                    <span>
                      <button class="btn btn-success rounded-addon fs-85" style="border-radius: 0;">Save</button>
                    </span>
                </div>
      `;
    },
  });
});

/*=====================
Manage Rooms
=====================*/
$(document).ready(function(){
  $('.statusRooms').popover({
    // title: 'Abdi World',
    placement: 'top',
    trigger: 'hover',
    sanitize: false,
    html: true,
    content: function(){
      // var nameRoom = $(this).text();
      var roomHtml = 
                            `<table class="d-flex fs-85">
                                <div style="width:100%;">
                                  <tr>
                                    <th>Room</th>
                                    <td style="text-wrap: nowrap;">Not Active</td>
                                  </tr>
                                  
                                  <tr>
                                    <th>Ctrip</th>
                                    <td style="text-wrap: nowrap;">Not Active</td>
                                  </tr>
                                  
                                  <tr>
                                    <th>Tuniu</th>
                                    <td style="text-wrap: nowrap;">Not Active</td>
                                  </tr>
                                  
                                  <tr>
                                    <th>Dida</th>
                                    <td style="text-wrap: nowrap;">Not Active</td>
                                  </tr>
                                  
                                  <tr>
                                    <th>B2B Rate Plan</th>
                                    <td style="text-wrap: nowrap;">Not Active</td>
                                  </tr>
                                  
                                  <tr>
                                      <th >Show B2B Rate Plan on CM (D-Edge)</th>
                                      <td style="text-wrap: nowrap; vertical-align: top;">Not Active</td>
                                  </tr>                              
                                </div>
                            </table>`;
                            // `First Name : `+nameBooking[0]+
                            // ` <br> Last Name : `+nameBooking[1]+
                            // ` <br> Nationality : Japan`;
      return roomHtml;
    },
  });

  $(document).on('change', '#selectRoomPhoto', function(){
    var optionSelected = $("option:selected", this).attr('value');
    console.log(optionSelected);
    if (optionSelected == 'DR') {
      $('#roomPhoto').attr('src', 'https://cms-asset.ayana.com/ARSB_Ocean_View_Room_King_1040x1040_3_1f82d3c332.jpg');
    } else if(optionSelected == 'SDR'){
      $('#roomPhoto').attr('src', 'https://cms-asset.ayana.com/996x560_MTG_Batur_c1f5d7e416.jpg');
    } else if(optionSelected == 'BR'){
      $('#roomPhoto').attr('src', 'https://s3.ap-southeast-1.amazonaws.com/cms-asset.ayana.com/respo_bb0be9b429.webp');
    }
  });

// Note that the name "myDropzone" is the camelized
// id of the form.
  Dropzone.options.myDropzone = {
    // Configuration options go here
    previewTemplate: '<input type="text" class="form-control" style="border-radius: 5px;" value="">',
    addRemoveLinks: true,
  };
});


/*=====================
Manage Price Stock Page
=====================*/
$(document).ready(function(){

  var dates = [];
    $("#cal").daterangepicker({
      locale: {
        format: 'YYYY-MM-DD'
      }
    });

    $("#cal").on('apply.daterangepicker', function(e, picker) {
      e.preventDefault();
      const obj = {
        "key": dates.length + 1,
        "start": picker.startDate.format('YYYY-MM-DD'),
        "end": picker.endDate.format('YYYY-MM-DD')
      }
      dates.push(obj);
      showDates();
    })



    $(document).on('click', '.remove', function() {
      removeDate($(this).attr('key'));
    });
    
    function removeDate(i) {
      dates = dates.filter(function(o) {
        return o.key != i;
      });
      showDates();
    }
    
  function showDates() {
    console.log(dates);

    $("#ranges").html("");
    $.each(dates, function() {
      const el = "<tr class='ms-3'><td>" + this.start + " - " + this.end + "</td><td><button class='btn btn-danger ms-1 p-1 py-0 mt-1 remove' key="+this.key+">-</button></td></tr>";
      $("#ranges").append(el);
    });

  }


$('#popover').popover({
  // title: 'Abdi World',
  placement: 'bottom',
  sanitize: false,
  container: 'body',
  html: true,
  content: function(){
    return `
              <div class="mb-1 fw-bold">
                Select days of week you want to fill :
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Sunday
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Monday
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Tuesday
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Wednesday
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Thursday
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Friday
              </div>
              
              <div class="">
                <input class="form-check-input me-1 checkboxSelectedDay" type="checkbox" style="cursor: pointer;" value="" id="flexCheckDefault">
                  Saturday
              </div>

              <div class="form-check form-switch">
                <input id="checkBoxAllDay" class="form-check-input" type="checkbox">
                <div class="mx-1 fw-bold text-primary section-tab mt-1">
                  Fill All
                </div>
              </div>

            `;
  }
});


$(document).on('click', '#checkBoxAllDay', function(){
  if ($('#checkBoxAllDay').is(':checked')) {
    $('.checkboxSelectedDay').prop('checked', true);
  }else{
    $('.checkboxSelectedDay').prop('checked', false);
  }
});

$(document).on('change', '.checkboxSelectedDay, #checkBoxAllDay', function(){
  var checkAll = $('.checkboxSelectedDay').filter(':checked').length;
  if (checkAll == $('.checkboxSelectedDay').length) {
    $('#checkBoxAllDay').prop('checked', true);
  }else{
    $('#checkBoxAllDay').prop('checked', false);
  }
});

// new AutoNumeric('.mask-money', { 
//   // currencySymbol : '$' 
//    // currencySymbol: 'Rp ',
//    maximumValue : '99999999999.99',
//    digitGroupSeparator: ',',
//    decimalCharacter: '.'
// });

$('.mask-money').autoNumeric(
    'init', {
        // currencySymbol: 'Rp ',
        maximumValue : '99999999999.99',
        digitGroupSeparator: ',',
        decimalCharacter: '.'
    }
);  

// $('.cleave').Cleave({
//   numeral: true,
//   numeralDecimalScale: 2
// });

// new Cleave('.cleave', {
//   numeral: true,
//   numeralPositiveOnly: true,
//   numeralDecimalScale: 4,
// });

function inputJapan() {
  $('.input-Japan').val($('#input-Japan').val());
}
$('#input-Japan').on('keyup', function(){
  inputJapan();
});
$('#input-Japan').on('change', function(){
  inputJapan();
});

var inputChina = function(){
  $('.input-China').val($('#input-China').val());
}
$('#input-China').on('keyup', function(){
  inputChina();
});
$('#input-China').on('change', function(){
  inputChina();
});

var inputDomestic = function(){
  $('.input-Domestic').val($('#input-Domestic').val());
}
$('#input-Domestic').on('keyup', function(){
  inputDomestic();
});
$('#input-Domestic').on('change', function(){
  inputDomestic();
});

var inputEurope = function(){
  $('.input-Europe').val($('#input-Europe').val());
}
$('#input-Europe').on('keyup', function(){
  inputEurope();
});
$('#input-Europe').on('change', function(){
  inputEurope();
});

var inputMiddleEast = function(){
  $('.input-MiddleEast').val($('#input-MiddleEast').val());
}
$('#input-MiddleEast').on('keyup', function(){
  inputMiddleEast();
});
$('#input-MiddleEast').on('change', function(){
  inputMiddleEast();
});

var inputKorea = function(){
  $('.input-Korea').val($('#input-Korea').val());
}
$('#input-Korea').on('keyup', function(){
  inputKorea();
});
$('#input-Korea').on('change', function(){
  inputKorea();
});

var inputAsia = function(){
  $('.input-Asia').val($('#input-Asia').val());
}
$('#input-Asia').on('keyup', function(){
  inputAsia();
});
$('#input-Asia').on('change', function(){
  inputAsia();
});

var inputOther = function(){
  $('.input-Other').val($('#input-Other').val());
}
$('#input-Other').on('keyup', function(){
  inputOther();
});
$('#input-Other').on('change', function(){
  inputOther();
});

var inputMinNight = function(){
  $('.input-MinNight').val($('#input-MinNight').val());
}
$('#input-MinNight').on('keyup', function(){
  inputMinNight();
});
$('#input-MinNight').on('change', function(){
  inputMinNight();
});

var inputShareStock = function(){
  $('.input-shareStock').val($('#input-shareStock').val());
}
$('#input-shareStock').on('keyup', function(){
  inputShareStock();
});
$('#input-shareStock').on('change', function(){
  inputShareStock();
});

var inputAllMarketPrice = function(){
  $('.input-allMarketPrice').val($('#input-allMarketPrice').val());
}
$('#input-allMarketPrice').on('keyup', function(){
  inputAllMarketPrice();
});
$('#input-allMarketPrice').on('change', function(){
  inputAllMarketPrice();
});

$('#checkbox-stopSell').on('click', function(){
  if ($('#checkbox-stopSell').is(':checked')) {
    $('.checkbox-stopSell').prop('checked', true);
  }else{
    $('.checkbox-stopSell').prop('checked', false);
  }
});

$('.checkbox-stopSell').on('click', function(){
  var checkAllStopSell = $('.checkbox-stopSell').filter(':checked').length;
  if (checkAllStopSell == $('.checkbox-stopSell').length) {
    $('#checkbox-stopSell').prop('checked', true);
  }else{
    $('#checkbox-stopSell').prop('checked', false);
  }
});

$('#checkbox-stopPromotion').on('click', function(){
  if ($('#checkbox-stopPromotion').is(':checked')) {
    $('.checkbox-stopPromotion').prop('checked', true);
  }else{
    $('.checkbox-stopPromotion').prop('checked', false);
  }
});

$('.checkbox-stopPromotion').on('click', function(){
  var checkAllstopPromotion = $('.checkbox-stopPromotion').filter(':checked').length;
  if (checkAllstopPromotion == $('.checkbox-stopPromotion').length) {
    $('#checkbox-stopPromotion').prop('checked', true);
  }else{
    $('#checkbox-stopPromotion').prop('checked', false);
  }
});

$('#checkbox-shareStock').on('change', function(){
  if($('#checkbox-shareStock').is(':checked')) {
    $('#input-shareStock').css('cursor', 'not-allowed');
    $('.input-shareStock').css('cursor', 'not-allowed');
    $('#input-shareStock').attr("readonly", true);
    $('.input-shareStock').attr("readonly", true);
  }else{
    $('#input-shareStock').css('cursor', '');
    $('.input-shareStock').css('cursor', '');
    $('#input-shareStock').attr("readonly", false);
    $('.input-shareStock').attr("readonly", false);
  }
});  

});

/*=====================
Manage Promotions Page
=====================*/
$(document).ready(function(){

  $(document).on('change', '#benefitGet', function(){
    var optionSelected = $("option:selected", this).attr('id');
    console.log(optionSelected);
    if (optionSelected == 'percentage') {
      $('#titleBenefitGet').text('%');
    } else if(optionSelected == 'IDR'){
      $('#titleBenefitGet').text('IDR');
    } else if(optionSelected == 'Night'){
      $('#titleBenefitGet').text('Night');
    }
  });

  $(document).on('change, keyup', '.numberOfRoom', function(){
    var value = $(this).val();
    if (value > 1) {
      $('.titleNumberOfRoom').text('Rooms');
    }else{
      $('.titleNumberOfRoom').text('Room');
    }
  });
  
  $(document).on('change, keyup', '.numberOfFloor', function(){
    var value = $(this).val();
    if (value > 1) {
      $('.titleNumberOfFloor').text('Floors');
    }else{
      $('.titleNumberOfFloor').text('Floor');
    }
  });
  
  $(document).on('change, keyup', '.numberOfMinute', function(){
    var value = $(this).val();
    if (value > 1) {
      $('.titleNumberOfMinute').text('Minutes');
    }else{
      $('.titleNumberOfMinute').text('Minute');
    }
  });

  $(document).on('change, keyup', '#inputStayAtLeast', function(){
    var value = $(this).val();
    if (value > 1) {
      $('#titleStayAtLeast').text('Nights')
    }else{
      $('#titleStayAtLeast').text('Night')
    }
  });

  $('#daterange-inputStayDate').daterangepicker({
    locale: {
      format: 'YYYY-MM-DD'
    }
  });

  $('#daterange-btn-stay-date').on('click', function(){
      $('#daterange-inputStayDate').focus();
   })
$('#hideChecked').on('click', function(){
  var hideChecked = $('.checkboxSelected').is(':checked');
  $('.checkboxSelected').each(function(){
    if ($(this).is(':checked')) {
      $(this).closest('.row-color').css('background-color', '#ffedd5')
    }
  });

  $('.checkboxSelected').prop('checked', false);
  $('#checkboxAll').prop('checked', false);
  
  $('#deleteChecked').prop("disabled", true);
  $('#deleteChecked').css('cursor', 'pointer');
  
  $('#showChecked').prop("disabled", true);
  $('#showChecked').css('cursor', 'pointer');
  
  $('#hideChecked').prop("disabled", true);
  $('#hideChecked').css('cursor', 'pointer');
});

$('#deleteChecked').on('click', function(){
  var deleteChecked = $('.checkboxSelected').is(':checked');
  $('.checkboxSelected').each(function(){
    if ($(this).is(':checked')) {
      $(this).closest('.row-color').remove()
    }
  });

  $('.checkboxSelected').prop('checked', false);
  $('#checkboxAll').prop('checked', false);
  
  $('#deleteChecked').prop("disabled", true);
  $('#deleteChecked').css('cursor', 'pointer');
  
  $('#showChecked').prop("disabled", true);
  $('#showChecked').css('cursor', 'pointer');
  
  $('#hideChecked').prop("disabled", true);
  $('#hideChecked').css('cursor', 'pointer');
});

$('#showChecked').on('click', function(){
  var showChecked = $('.checkboxSelected').is(':checked');
  $('.checkboxSelected').each(function(){
    if ($(this).is(':checked')) {
      $(this).closest('.row-color').css('background-color', '#EDFAFD')
    }
  });

  $('.checkboxSelected').prop('checked', false);
  $('#checkboxAll').prop('checked', false);

  $('#deleteChecked').prop("disabled", true);
  $('#deleteChecked').css('cursor', 'pointer');
  
  $('#showChecked').prop("disabled", true);
  $('#showChecked').css('cursor', 'pointer');
  
  $('#hideChecked').prop("disabled", true);
  $('#hideChecked').css('cursor', 'pointer');
});

// Promotion Edit
$('#storeFrontAll').on('click', function(){
  if ($('#storeFrontAll').is(':checked')) {
    $('.storeFrontSelected').prop('checked', true);
  }else{
    $('.storeFrontSelected').prop('checked', false);
  }
});
$('.storeFrontSelected, #storeFrontAll').on('change', function(){
  var checkAll = $('.storeFrontSelected').filter(':checked').length;
  if (checkAll == $('.storeFrontSelected').length) {
    $('#storeFrontAll').prop('checked', true);
  }else{
    $('#storeFrontAll').prop('checked', false);
  }
});


$(document).on('change', '#typePromotion',function (e) {
    var optionSelected = $("option:selected", this).attr('value');
    if (optionSelected == 'SP' || optionSelected == 'FD') {
      console.log('its gone');
      $('#typePromotionAppend').css('margin-bottom', '')
      $('#typePromotionAppend').children('div').remove()
      $('#typePromotionAppend').append(`
        <div style="margin-top: 1.7rem;">
          <input type="text" class="form-control fs-85" style="border-radius: 5px;" disabled>
        </div>
      `)
    }else if(optionSelected == 'EB')
    {
      console.log('Days Advance');
      $('#typePromotionAppend').css('margin-bottom', '')
      $('#typePromotionAppend').children('div').remove()
      $('#typePromotionAppend').append(`
          <div class="mb-3">
              <div for="exampleFormControlInput1 fs-5" class="form-label">Days Advance</div>
              <input type="text" class="form-control fs-85" style="border-radius: 5px;" value="90">
          </div>
      `)
    }else if(optionSelected == 'LM')
    {
      $('#typePromotionAppend').css('margin-bottom', '')
      $('#typePromotionAppend').children('div').remove()
      $('#typePromotionAppend').append(`
          <div class="mb-3">
              <div for="exampleFormControlInput1 fs-5" class="form-label">Within Arrival</div>
              <input type="text" class="form-control fs-85" style="border-radius: 5px;" value="0">
          </div>
      `)

    }
    console.log(optionSelected);
});

$(document).on('change', '#cancellationPolicy', function(){
  var optionSelected = $("option:selected", this).attr('value');
  if (optionSelected ) {
    $('#cancellationSelect').removeClass('d-none');
  }else{
    $('#cancellationSelect').addClass('d-none');
  }
})

$('.btn-promotion-edit').on('click', function(){
  window.location.href='manage-promotion-edit.html';
});

$(document).on('click', '#addBenefit',  function(){
  $('#addBenefit').addClass('d-none');
  $('#benefit').append(`
    <table class="table table-borderless">
      <thead>
        <tr>
          <th>Other Benefit</th>
          <th>For</th>
          <th>
            <button id="addBenefitTable" class="btn btn-primary">+</button>
          </th>
        </tr>
      </thead>
      <tbody id="benefitTableBody">
        <tr class="tr-benefit">
          <td>
            <div class="">
              <!-- <div for="exampleFormControlInput1 fs-5" class="form-label">Type</div> -->
                <select class="form-select fs-85 borderadius" aria-label="Default select example">
                <option value="" selected> 1 x Dinner </option>
                <option value=""> 1 x 30 Minutes Traditional Massage </option>
                <option value=""> 1 x Light Lunch (No Beverage) </option>
                <option value=""> Welcome Fruit Basket </option>
                <option value=""> Welcome Drink </option>
                <option value=""> 1 x Lunch </option>
                <option value=""> 1 x Full Day Charter (Max. 8 Hours) </option>
                <option value=""> Late Check Out until 18:00PM </option>
                <option value=""> Discount 20% F&amp;B Exclude Alcohol </option>
                <option value=""> Discount 20% For Massage </option>
                <option value=""> Free 1 x Mini Bar Upon Arrival </option>
                <option value=""> 1 x Welcome Dinner </option>
                <option value=""> 1 x Airport Transport (Pick Up/Drop Out) </option>
                <option value=""> 15% Saving On Spa Treatment at Nirwana Spa </option>
                <option value=""> 10% Savings on Restaurant </option>
                <option value=""> Shuttle service to Kuta and Seminyak at Hotel Schedule </option>
                <option value=""> Discount 40% for Laundry &amp; Dry Cleaning </option>
                <option value=""> Discount 30% for F&amp;B (All Products) </option>
                <option value=""> Free Daily Minibar </option>
                <option value=""> Free Upgrade to Higher Room Category </option>
                <option value=""> Late Check Out until 15:00 </option>
                <option value=""> 1x Picnic Box by the river </option>
                <option value=""> Free Voucher Pulse All Provider </option>
                <option value=""> 1 x 10 Minutes Massage </option>
                <option value=""> Free Lunch or Dinner </option>
                <option value=""> Discount 25%Off F&amp;B </option>
                <option value=""> Discount 25%Off Laundry </option>
                <option value=""> Discount 25%Off Massage </option>
                <option value=""> Get 10% off Spa &amp; Room Service </option>
                <option value=""> 20% Discount in Fame Cafe </option>
                <option value=""> Discount 25% Laundry </option>
                <option value=""> Discount 20% F&amp;B </option>
                <option value=""> Late Check Out until 1.00 PM </option>
                <option value=""> Discount 40% Laundry </option>
                <option value=""> Discount 30% F&amp;B </option>
                <option value=""> Free Laundry for 1 set of clothes </option>
                <option value=""> Discount 5% F&amp;B </option>
                <option value=""> Return Airport Transfer 08.00 AM - 08.00 PM </option>
                <option value=""> Free Pick Up Service Airport-Hotel </option>
                <option value=""> Discount 30% All Spa Treatment </option>
                <option value=""> Free Shuttle to Kuta Beach </option>
                <option value=""> Welcome Massage Upon Arrival </option>
                <option value=""> Daily Fresh Tropical Fruits </option>
                <option value=""> Free Shuttle to Ubud at Hotel Schedule </option>
                <option value=""> Voucher IDR 1.000.000,- at Rock Bar </option>
                <option value=""> 1 x Full Day Tour (8 Hours + Free Gasoline) </option>
                <option value=""> Free Shuttle Seminyak, Kuta, Legian (On Schedule) </option>
                <option value=""> Get Discount 10% at Warung Jerami </option>
                <option value=""> Get free 1x Lunch or Dinner "Nasi Goreng Kampung" for 2 persons </option>
                <option value=""> 10% Discount Souvenir at Mr. Kuta Oleh Oleh </option>
                <option value=""> Sahur </option>
                <option value=""> Free 1x Airport Drop Out / Pick Up </option>
                <option value=""> Get 1 Voucher Spa or Food Menu </option>
                <option value=""> Free Access to Fitness Centre </option>
                <option value=""> Get discount 30% for all treatment at Nusantara Spa </option>
                <option value=""> Free Shuttle to Manado Down Town </option>
                <option value=""> 1 x Lunch or 1 x Dinner for 2 Person (Per Stay) </option>
                <option value=""> 1 x Dinner Or 1 x 60 Minutes Massage </option>
                <option value=""> Late Check Out until 16:00 PM (Subject to availability) </option>
                <option value=""> Complimentary drop to Beach Club </option>
                <option value=""> Free 1 x Break Fasting </option>
                <option value=""> 1 x Balinese Massage 1 Hour (Per Stay) </option>
                <option value=""> 1 x Oshibori </option>
                <option value=""> 1 x Half Day Uluwatu Tour (5 Hours) </option>
                <option value=""> Free 1 Night Stay (valid until 06 Aug 2013) </option>
                <option value=""> Free 1x Lunch or Dinner </option>
                <option value=""> Free Upgrade to Deluxe Room </option>
                <option value=""> Discount 10% off F&amp;B (excluded of Alcoholic) </option>
                <option value=""> Uluwatu-Ubud-Tanah Lot Tour </option>
                <option value=""> Half Day Uluwatu + Full Day Kintamani Tour </option>
                <option value=""> Uluwatu-Kintamani Full Day Tour </option>
                <option value=""> One Time 30 Minutes Massage </option>
                <option value=""> Welcome Drink Upon Arrival </option>
                <option value=""> Fragrant Chilled Face Towel </option>
                <option value=""> Daily 2 Replenished Mineral Water </option>
                <option value=""> Free Gymnasium Usage </option>
                <option value=""> Free WiFi In All Hotel's Area </option>
                <option value=""> Free One Time 60 Minutes Massage </option>
                <option value=""> Coffee &amp; Tea Maker Facility In The Room </option>
                <option value=""> Free WiFi In The Villa Area </option>
                <option value=""> 1 x Photo Shooting with Balinese Costume </option>
                <option value=""> Free Upgrade to Royal Pool Villa ( Subject to availability ) </option>
                <option value=""> Free 30 Minutes Face or Back Massage </option>
                <option value=""> Daily American Breakfast </option>
                <option value=""> Free Shuttle To Kuta, Legian, Seminyak </option>
                <option value=""> Free Upgrade to HARRIS Residence 1 Bedroom (Subject to Availability) </option>
                <option value=""> Free Using Fitness Center Facility </option>
                <option value=""> 15% Discount for SPA </option>
                <option value=""> Complimentary Late Check Out till 18:00 </option>
                <option value=""> FREE Shuttle to Pandawa Beach and Jimbaran Beach (On Schedule) </option>
                <option value=""> FREE 1 x Happy Feet @15 Minutes </option>
                <option value=""> FREE Business Corner Usage with PC &amp; Internet Access </option>
                <option value=""> FREE Shuttle Service to Kuta and Tuban area (On Schedule) </option>
                <option value=""> FREE Entrance to Kids Club </option>
                <option value=""> Free Late Check Out until 12.00 Midnight (subject to availability) </option>
                <option value=""> 1 (One) Time Set Menu Dinner or Lunch </option>
                <option value=""> Free WiFi In The Room </option>
                <option value=""> Half Day Uluwatu Tour + Romantic Dinner at Jimbaran </option>
                <option value=""> Free Return Airport Transfers </option>
                <option value=""> Full Day Ubud-Tanah Lot Tour + Romantic Spa </option>
                <option value=""> Return Airport Transfer </option>
                <option value=""> 1x 60 Min Massage or 1x Lunch for 2 persons </option>
                <option value=""> Daily Breakfast </option>
                <option value=""> Flower Garland Upon Arrival </option>
                <option value=""> Flower Bath Upon Arrival </option>
                <option value=""> Honeymoon Cake Upon Arrival </option>
                <option value=""> Free Snack &amp; Hi-Tea at Executive Lounge, 7th floor. </option>
                <option value=""> 1x Afternoon Tapa Time (Choice of Dessert and Coffee or Tea) </option>
                <option value=""> 1 x 15 Minutes Welcome Massage </option>
                <option value=""> 30% OFF for All Treatment at O-CE-N Spa </option>
                <option value=""> Shuttle Service to Seminyak Square (Drop only) </option>
                <option value=""> Shuttle to Airport based on Schedule </option>
                <option value=""> 1x 45 Min SPA Treatment </option>
                <option value=""> 1x Lunch or Dinner Nasi Goreng Ala Chef </option>
                <option value=""> 1 x Free Thank You Letter with Balinese Alphabet </option>
                <option value=""> Buy 1 Get 1 Cocktail at Manimanika Bar during Happy Hours 02.00 - 06.00 PM </option>
                <option value=""> Get 1x 30 minutes Balinese Traditional Back Massages </option>
                <option value=""> 1x Indonesian Set Menu Dinner ( Food Only ) </option>
                <option value=""> Get 10% disc for F&amp;B ( Room service/Non Alcoholic ) and Massage </option>
                <option value=""> 1X Pan Pizza </option>
                <option value=""> 1 x Lunch at HARRIS Cafe on 31 March 2014 </option>
                <option value=""> 1 x Dinner at HARRIS Cafe on 31 March 2014 </option>
                <option value=""> Discount 10% Off at H'Spa </option>
                <option value=""> Free Entrance at Fitness Center </option>
                <option value=""> Free Time to joint Cooking lesson with HARRIS Chef </option>
                <option value=""> Discount 10% Off F&amp;B at HARRIS Cafe </option>
                <option value=""> Refreshing Fruit Juice upon Arrival </option>
                <option value=""> 10% Discount for 60 minutes Balinese Massage </option>
                <option value=""> Late Check Out until 2pm </option>
                <option value=""> Daily Buffet Breakfast </option>
                <option value=""> 1 x Buffet Lunch </option>
                <option value=""> 1 x Buffet Dinner </option>
                <option value=""> Free Upgrade to Premier Room </option>
                <option value=""> Flower Petal Setup </option>
                <option value=""> 1 Hour Balinese Massage </option>
                <option value=""> Free Entrance to Dino Kids Club </option>
                <option value=""> Free Entrance to Mini Gym </option>
                <option value=""> 10% Discount for H-Spa </option>
                <option value=""> 10% Discount for Reflexology </option>
                <option value=""> Free Daily Activities &amp; Games by the Pool </option>
                <option value=""> Free In House Movies Program </option>
                <option value=""> Free Admission to Mom &amp; Kids Team Building Activities </option>
                <option value=""> Free Upgrade to Superior </option>
                <option value=""> Free Entrance to Guest Activity </option>
                <option value=""> 15% Discount at Amadapa Spa </option>
                <option value=""> 1 x Brunch </option>
                <option value=""> Tropical Fruit Basket Upon Arrival </option>
                <option value=""> Daily Afternoon Tea </option>
                <option value=""> Free shuttle service to the heart of Kuta and Legian </option>
                <option value=""> 1x Barbeque Dinner </option>
                <option value=""> Free Upgrade to Superior Garden View </option>
                <option value=""> Free Shuttle to Kuta Area &amp; Geger Beach based on Schedule </option>
                <option value=""> 1 x Lunch with Minimum 3 Nights Stay </option>
                <option value=""> Tajil </option>
                <option value=""> 10% Discount in all Outlets (Except Alcohol &amp; Boutique Items) </option>
                <option value=""> Daily 2 Bottles of Beer </option>
                <option value=""> One Day City Tour </option>
                <option value=""> Free Lunch </option>
                <option value=""> Free Dinner for 2 Persons </option>
                <option value=""> Free Laundry </option>
                <option value=""> 1x Yoga Class </option>
                <option value=""> Un-limited services of water, coffee, and tea </option>
                <option value=""> “Kiss style” of daily breakfast </option>
                <option value=""> Daily Afternoon refreshment </option>
                <option value=""> Limited Special Offer! </option>
                <option value=""> 15% Discount Spa Treatment at Sol Beach House Benoa Spa </option>
                <option value=""> 1 x Light Dinner </option>
                <option value=""> 1 x 30 Minutes Reflexology </option>
                <option value=""> 1 Package Marbella Adventure (Shooting Target, ATV &amp; Water Balloon) </option>
                <option value=""> One Night Accommodation </option>
                <option value=""> 10% Disc Food Only </option>
                <option value=""> 25%disc for Spa Package </option>
                <option value=""> Rates are inclusive of 21% government tax and service charge </option>
                <option value=""> 15% disc for Spa Treatment </option>
                <option value=""> FREE Broadband Internet access (WIFI) </option>
                <option value=""> Free Shuttle to Pandawa Beach based on Schedule </option>
                <option value=""> One Night Accommodation </option>
                <option value=""> Free Entrance Ticket To Bali Zoo or Bali Bird Park </option>
                <option value=""> Free Access to DMZ 3D Museum </option>
                <option value=""> 1x Lunch or 1x Dinner </option>
                <option value=""> 1x Free Airport Transfer Out </option>
                <option value=""> 1 X 60min. Spa Treatment </option>
                <option value=""> 1x30min. Massage </option>
                <option value=""> 1x45min. Massage </option>
                <option value=""> 1x30min. Beach Massage </option>
                <option value=""> Free Late Check Out Until 16:00 </option>
                <option value=""> Fresh Towel </option>
                <option value=""> Garland Upon Arrival </option>
                <option value=""> Complimentary Painting and Wood Carving Lesson </option>
                <option value=""> Yoga Class </option>
                <option value=""> Free Scheduled Shuttle Service to Central Ubud </option>
                <option value=""> 1x Airport Transfer </option>
                <option value=""> Shuttle Service to Kuta and Seminyak shopping center at Hotel Schedule. </option>
                <option value=""> Coffee and Tea Facility in the room. </option>
                <option value=""> Daily Replenished Mineral Water </option>
                <option value=""> 1 x Gala Dinner for 2 Persons at New Year's Eve </option>
                <option value=""> Live Music at New Year's Eve </option>
                <option value=""> Late Check Out till 2PM </option>
                <option value=""> 1x Free Mocktail </option>
                <option value=""> 15% Dics at Max Bistro Restaurant </option>
                <option value=""> 1x Free Lunch (Set Menu) </option>
                <option value=""> Airport Pick Up or Drop </option>
                <option value=""> 1 x Breakfast for 2 Persons </option>
                <option value=""> 1 x Dinner for 2 Persons </option>
                <option value=""> Entrance Ticket for New Year Party </option>
                <option value=""> Free Mini Bar </option>
                <option value=""> Free Airport Transfers </option>
                <option value=""> Free 10 Minutes Massage </option>
                <option value=""> One Time Breakfast </option>
                <option value=""> One Time Dinner </option>
                <option value=""> 1 x 30 Minutes Massage </option>
                <option value=""> 1 x Dinner </option>
                <option value=""> Buffet Breakfast at Swiss Cafe </option>
                <option value=""> Free Wi-Fi at public area and rooms </option>
                <option value=""> The use of Fitness Centre </option>
                <option value=""> 10% Discount food only @The Lounge </option>
                <option value=""> 25% Discount for Spa Package @Devata Spa </option>
                <option value=""> 15% Discount for Spa Treatment @Devata Spa </option>
                <option value=""> Free 1 x Cocktail </option>
                <option value=""> Free 1 bottle wine </option>
                <option value=""> Free 1 x 2 hours SPA </option>
                <option value=""> Daily Afternoon Tea in Villa </option>
                <option value=""> Free 1 x Picnic Hamper Lunch </option>
                
              </select>
            </div>
          </td>
          <td>
            <input type="number" class="form-control fs-85" style="border-radius: 5px;">
          </td>
          <td>
            <button class="btn btn-danger deleteBenefit" style="font-size: 0.85rem;">
            <i class="fa-regular fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `);
});

$(document).on('click','#addBenefitTable', function(){
  $('#benefitTableBody').append(`
    <tr class="tr-benefit">
      <td>
        <div class="">
          <!-- <div for="exampleFormControlInput1 fs-5" class="form-label">Type</div> -->
          <select class="form-select fs-85 borderadius" aria-label="Default select example">
              <option value="" selected> 1 x Dinner </option>
              <option value=""> 1 x 30 Minutes Traditional Massage </option>
              <option value=""> 1 x Light Lunch (No Beverage) </option>
              <option value=""> Welcome Fruit Basket </option>
              <option value=""> Welcome Drink </option>
              <option value=""> 1 x Lunch </option>
              <option value=""> 1 x Full Day Charter (Max. 8 Hours) </option>
              <option value=""> Late Check Out until 18:00PM </option>
              <option value=""> Discount 20% F&amp;B Exclude Alcohol </option>
              <option value=""> Discount 20% For Massage </option>
              <option value=""> Free 1 x Mini Bar Upon Arrival </option>
              <option value=""> 1 x Welcome Dinner </option>
              <option value=""> 1 x Airport Transport (Pick Up/Drop Out) </option>
              <option value=""> 15% Saving On Spa Treatment at Nirwana Spa </option>
              <option value=""> 10% Savings on Restaurant </option>
              <option value=""> Shuttle service to Kuta and Seminyak at Hotel Schedule </option>
              <option value=""> Discount 40% for Laundry &amp; Dry Cleaning </option>
              <option value=""> Discount 30% for F&amp;B (All Products) </option>
              <option value=""> Free Daily Minibar </option>
              <option value=""> Free Upgrade to Higher Room Category </option>
              <option value=""> Late Check Out until 15:00 </option>
              <option value=""> 1x Picnic Box by the river </option>
              <option value=""> Free Voucher Pulse All Provider </option>
              <option value=""> 1 x 10 Minutes Massage </option>
              <option value=""> Free Lunch or Dinner </option>
              <option value=""> Discount 25%Off F&amp;B </option>
              <option value=""> Discount 25%Off Laundry </option>
              <option value=""> Discount 25%Off Massage </option>
              <option value=""> Get 10% off Spa &amp; Room Service </option>
              <option value=""> 20% Discount in Fame Cafe </option>
              <option value=""> Discount 25% Laundry </option>
              <option value=""> Discount 20% F&amp;B </option>
              <option value=""> Late Check Out until 1.00 PM </option>
              <option value=""> Discount 40% Laundry </option>
              <option value=""> Discount 30% F&amp;B </option>
              <option value=""> Free Laundry for 1 set of clothes </option>
              <option value=""> Discount 5% F&amp;B </option>
              <option value=""> Return Airport Transfer 08.00 AM - 08.00 PM </option>
              <option value=""> Free Pick Up Service Airport-Hotel </option>
              <option value=""> Discount 30% All Spa Treatment </option>
              <option value=""> Free Shuttle to Kuta Beach </option>
              <option value=""> Welcome Massage Upon Arrival </option>
              <option value=""> Daily Fresh Tropical Fruits </option>
              <option value=""> Free Shuttle to Ubud at Hotel Schedule </option>
              <option value=""> Voucher IDR 1.000.000,- at Rock Bar </option>
              <option value=""> 1 x Full Day Tour (8 Hours + Free Gasoline) </option>
              <option value=""> Free Shuttle Seminyak, Kuta, Legian (On Schedule) </option>
              <option value=""> Get Discount 10% at Warung Jerami </option>
              <option value=""> Get free 1x Lunch or Dinner "Nasi Goreng Kampung" for 2 persons </option>
              <option value=""> 10% Discount Souvenir at Mr. Kuta Oleh Oleh </option>
              <option value=""> Sahur </option>
              <option value=""> Free 1x Airport Drop Out / Pick Up </option>
              <option value=""> Get 1 Voucher Spa or Food Menu </option>
              <option value=""> Free Access to Fitness Centre </option>
              <option value=""> Get discount 30% for all treatment at Nusantara Spa </option>
              <option value=""> Free Shuttle to Manado Down Town </option>
              <option value=""> 1 x Lunch or 1 x Dinner for 2 Person (Per Stay) </option>
              <option value=""> 1 x Dinner Or 1 x 60 Minutes Massage </option>
              <option value=""> Late Check Out until 16:00 PM (Subject to availability) </option>
              <option value=""> Complimentary drop to Beach Club </option>
              <option value=""> Free 1 x Break Fasting </option>
              <option value=""> 1 x Balinese Massage 1 Hour (Per Stay) </option>
              <option value=""> 1 x Oshibori </option>
              <option value=""> 1 x Half Day Uluwatu Tour (5 Hours) </option>
              <option value=""> Free 1 Night Stay (valid until 06 Aug 2013) </option>
              <option value=""> Free 1x Lunch or Dinner </option>
              <option value=""> Free Upgrade to Deluxe Room </option>
              <option value=""> Discount 10% off F&amp;B (excluded of Alcoholic) </option>
              <option value=""> Uluwatu-Ubud-Tanah Lot Tour </option>
              <option value=""> Half Day Uluwatu + Full Day Kintamani Tour </option>
              <option value=""> Uluwatu-Kintamani Full Day Tour </option>
              <option value=""> One Time 30 Minutes Massage </option>
              <option value=""> Welcome Drink Upon Arrival </option>
              <option value=""> Fragrant Chilled Face Towel </option>
              <option value=""> Daily 2 Replenished Mineral Water </option>
              <option value=""> Free Gymnasium Usage </option>
              <option value=""> Free WiFi In All Hotel's Area </option>
              <option value=""> Free One Time 60 Minutes Massage </option>
              <option value=""> Coffee &amp; Tea Maker Facility In The Room </option>
              <option value=""> Free WiFi In The Villa Area </option>
              <option value=""> 1 x Photo Shooting with Balinese Costume </option>
              <option value=""> Free Upgrade to Royal Pool Villa ( Subject to availability ) </option>
              <option value=""> Free 30 Minutes Face or Back Massage </option>
              <option value=""> Daily American Breakfast </option>
              <option value=""> Free Shuttle To Kuta, Legian, Seminyak </option>
              <option value=""> Free Upgrade to HARRIS Residence 1 Bedroom (Subject to Availability) </option>
              <option value=""> Free Using Fitness Center Facility </option>
              <option value=""> 15% Discount for SPA </option>
              <option value=""> Complimentary Late Check Out till 18:00 </option>
              <option value=""> FREE Shuttle to Pandawa Beach and Jimbaran Beach (On Schedule) </option>
              <option value=""> FREE 1 x Happy Feet @15 Minutes </option>
              <option value=""> FREE Business Corner Usage with PC &amp; Internet Access </option>
              <option value=""> FREE Shuttle Service to Kuta and Tuban area (On Schedule) </option>
              <option value=""> FREE Entrance to Kids Club </option>
              <option value=""> Free Late Check Out until 12.00 Midnight (subject to availability) </option>
              <option value=""> 1 (One) Time Set Menu Dinner or Lunch </option>
              <option value=""> Free WiFi In The Room </option>
              <option value=""> Half Day Uluwatu Tour + Romantic Dinner at Jimbaran </option>
              <option value=""> Free Return Airport Transfers </option>
              <option value=""> Full Day Ubud-Tanah Lot Tour + Romantic Spa </option>
              <option value=""> Return Airport Transfer </option>
              <option value=""> 1x 60 Min Massage or 1x Lunch for 2 persons </option>
              <option value=""> Daily Breakfast </option>
              <option value=""> Flower Garland Upon Arrival </option>
              <option value=""> Flower Bath Upon Arrival </option>
              <option value=""> Honeymoon Cake Upon Arrival </option>
              <option value=""> Free Snack &amp; Hi-Tea at Executive Lounge, 7th floor. </option>
              <option value=""> 1x Afternoon Tapa Time (Choice of Dessert and Coffee or Tea) </option>
              <option value=""> 1 x 15 Minutes Welcome Massage </option>
              <option value=""> 30% OFF for All Treatment at O-CE-N Spa </option>
              <option value=""> Shuttle Service to Seminyak Square (Drop only) </option>
              <option value=""> Shuttle to Airport based on Schedule </option>
              <option value=""> 1x 45 Min SPA Treatment </option>
              <option value=""> 1x Lunch or Dinner Nasi Goreng Ala Chef </option>
              <option value=""> 1 x Free Thank You Letter with Balinese Alphabet </option>
              <option value=""> Buy 1 Get 1 Cocktail at Manimanika Bar during Happy Hours 02.00 - 06.00 PM </option>
              <option value=""> Get 1x 30 minutes Balinese Traditional Back Massages </option>
              <option value=""> 1x Indonesian Set Menu Dinner ( Food Only ) </option>
              <option value=""> Get 10% disc for F&amp;B ( Room service/Non Alcoholic ) and Massage </option>
              <option value=""> 1X Pan Pizza </option>
              <option value=""> 1 x Lunch at HARRIS Cafe on 31 March 2014 </option>
              <option value=""> 1 x Dinner at HARRIS Cafe on 31 March 2014 </option>
              <option value=""> Discount 10% Off at H'Spa </option>
              <option value=""> Free Entrance at Fitness Center </option>
              <option value=""> Free Time to joint Cooking lesson with HARRIS Chef </option>
              <option value=""> Discount 10% Off F&amp;B at HARRIS Cafe </option>
              <option value=""> Refreshing Fruit Juice upon Arrival </option>
              <option value=""> 10% Discount for 60 minutes Balinese Massage </option>
              <option value=""> Late Check Out until 2pm </option>
              <option value=""> Daily Buffet Breakfast </option>
              <option value=""> 1 x Buffet Lunch </option>
              <option value=""> 1 x Buffet Dinner </option>
              <option value=""> Free Upgrade to Premier Room </option>
              <option value=""> Flower Petal Setup </option>
              <option value=""> 1 Hour Balinese Massage </option>
              <option value=""> Free Entrance to Dino Kids Club </option>
              <option value=""> Free Entrance to Mini Gym </option>
              <option value=""> 10% Discount for H-Spa </option>
              <option value=""> 10% Discount for Reflexology </option>
              <option value=""> Free Daily Activities &amp; Games by the Pool </option>
              <option value=""> Free In House Movies Program </option>
              <option value=""> Free Admission to Mom &amp; Kids Team Building Activities </option>
              <option value=""> Free Upgrade to Superior </option>
              <option value=""> Free Entrance to Guest Activity </option>
              <option value=""> 15% Discount at Amadapa Spa </option>
              <option value=""> 1 x Brunch </option>
              <option value=""> Tropical Fruit Basket Upon Arrival </option>
              <option value=""> Daily Afternoon Tea </option>
              <option value=""> Free shuttle service to the heart of Kuta and Legian </option>
              <option value=""> 1x Barbeque Dinner </option>
              <option value=""> Free Upgrade to Superior Garden View </option>
              <option value=""> Free Shuttle to Kuta Area &amp; Geger Beach based on Schedule </option>
              <option value=""> 1 x Lunch with Minimum 3 Nights Stay </option>
              <option value=""> Tajil </option>
              <option value=""> 10% Discount in all Outlets (Except Alcohol &amp; Boutique Items) </option>
              <option value=""> Daily 2 Bottles of Beer </option>
              <option value=""> One Day City Tour </option>
              <option value=""> Free Lunch </option>
              <option value=""> Free Dinner for 2 Persons </option>
              <option value=""> Free Laundry </option>
              <option value=""> 1x Yoga Class </option>
              <option value=""> Un-limited services of water, coffee, and tea </option>
              <option value=""> “Kiss style” of daily breakfast </option>
              <option value=""> Daily Afternoon refreshment </option>
              <option value=""> Limited Special Offer! </option>
              <option value=""> 15% Discount Spa Treatment at Sol Beach House Benoa Spa </option>
              <option value=""> 1 x Light Dinner </option>
              <option value=""> 1 x 30 Minutes Reflexology </option>
              <option value=""> 1 Package Marbella Adventure (Shooting Target, ATV &amp; Water Balloon) </option>
              <option value=""> One Night Accommodation </option>
              <option value=""> 10% Disc Food Only </option>
              <option value=""> 25%disc for Spa Package </option>
              <option value=""> Rates are inclusive of 21% government tax and service charge </option>
              <option value=""> 15% disc for Spa Treatment </option>
              <option value=""> FREE Broadband Internet access (WIFI) </option>
              <option value=""> Free Shuttle to Pandawa Beach based on Schedule </option>
              <option value=""> One Night Accommodation </option>
              <option value=""> Free Entrance Ticket To Bali Zoo or Bali Bird Park </option>
              <option value=""> Free Access to DMZ 3D Museum </option>
              <option value=""> 1x Lunch or 1x Dinner </option>
              <option value=""> 1x Free Airport Transfer Out </option>
              <option value=""> 1 X 60min. Spa Treatment </option>
              <option value=""> 1x30min. Massage </option>
              <option value=""> 1x45min. Massage </option>
              <option value=""> 1x30min. Beach Massage </option>
              <option value=""> Free Late Check Out Until 16:00 </option>
              <option value=""> Fresh Towel </option>
              <option value=""> Garland Upon Arrival </option>
              <option value=""> Complimentary Painting and Wood Carving Lesson </option>
              <option value=""> Yoga Class </option>
              <option value=""> Free Scheduled Shuttle Service to Central Ubud </option>
              <option value=""> 1x Airport Transfer </option>
              <option value=""> Shuttle Service to Kuta and Seminyak shopping center at Hotel Schedule. </option>
              <option value=""> Coffee and Tea Facility in the room. </option>
              <option value=""> Daily Replenished Mineral Water </option>
              <option value=""> 1 x Gala Dinner for 2 Persons at New Year's Eve </option>
              <option value=""> Live Music at New Year's Eve </option>
              <option value=""> Late Check Out till 2PM </option>
              <option value=""> 1x Free Mocktail </option>
              <option value=""> 15% Dics at Max Bistro Restaurant </option>
              <option value=""> 1x Free Lunch (Set Menu) </option>
              <option value=""> Airport Pick Up or Drop </option>
              <option value=""> 1 x Breakfast for 2 Persons </option>
              <option value=""> 1 x Dinner for 2 Persons </option>
              <option value=""> Entrance Ticket for New Year Party </option>
              <option value=""> Free Mini Bar </option>
              <option value=""> Free Airport Transfers </option>
              <option value=""> Free 10 Minutes Massage </option>
              <option value=""> One Time Breakfast </option>
              <option value=""> One Time Dinner </option>
              <option value=""> 1 x 30 Minutes Massage </option>
              <option value=""> 1 x Dinner </option>
              <option value=""> Buffet Breakfast at Swiss Cafe </option>
              <option value=""> Free Wi-Fi at public area and rooms </option>
              <option value=""> The use of Fitness Centre </option>
              <option value=""> 10% Discount food only @The Lounge </option>
              <option value=""> 25% Discount for Spa Package @Devata Spa </option>
              <option value=""> 15% Discount for Spa Treatment @Devata Spa </option>
              <option value=""> Free 1 x Cocktail </option>
              <option value=""> Free 1 bottle wine </option>
              <option value=""> Free 1 x 2 hours SPA </option>
              <option value=""> Daily Afternoon Tea in Villa </option>
              <option value=""> Free 1 x Picnic Hamper Lunch </option>
              
          </select>
        </div>
      </td>
      <td>
        <input type="number" class="form-control fs-85" style="border-radius: 5px;">
      </td>
      <td>
        <button class="btn btn-danger deleteBenefit" style="font-size: 0.85rem;">
        <i class="fa-regular fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `)
});

$(document).on('click', '.deleteBenefit', function(){
  var deleteBenefit = $('.deleteBenefit').length
  if (deleteBenefit == 1) {
    $('#benefit').children('table').remove();
    $('#addBenefit').removeClass('d-none');
  }else{
    $(this).closest('.tr-benefit').remove();
  }
})


$('.room-night').inputmask({"mask": "999[Night]" });
$('.room-book').inputmask({"mask": "999" });
$('.benefit-get').inputmask({"mask": "999[%]" });
});

/*=====================
Manage Announcements Page
=====================*/
$(document).ready(function(){
  $(document).on('change', '.checkPoliciesSelected, #checkAllPolicies', function(){
    var checkAll = $('.checkPoliciesSelected').filter(':checked').length;
    if (checkAll == $('.checkPoliciesSelected').length) {
      $('#checkAllPolicies').prop('checked', true);
    }else{
      $('#checkAllPolicies').prop('checked', false);
    }
  });

  $(document).on('click', '#checkAllPolicies', function(){
    if ($('#checkAllPolicies').is(':checked')) {
      $('.checkPoliciesSelected').prop('checked', true);
    }else{
      $('.checkPoliciesSelected').prop('checked', false);
    }
  });
});
/*=====================
Manage Announcements Page
=====================*/
$(document).ready(function(){
console.log('Announcements Ready');
$(document).on('click', '.btn-announcement-edit', function(){
  window.location.href= 'manage-announcement-edit.html';
});

$('#daterange-btn-announcementDueDate').on('click', function(){
    $('#daterange-inputAnnouncementDueDate').focus();
})

$('#daterange-inputAnnouncementDueDate').daterangepicker({
  locale: {
    format: 'YYYY-MM-DD'
  }
});

});

/*=====================
Manage Hotel Edit
=====================*/
$(document).ready (function(){
  console.log('Hotel Edit Ready');
  $('.alert').alert()
  $('#submit').on('click', function(){
    $('.alert').addClass('show');
    $('.alert').removeClass('d-none');
  });
  $('.close').on('click', function(){
    $(this).closest('div.alert').removeClass('show');
    $(this).closest('div.alert').addClass('d-none');
  });


  const input = document.querySelector("#countryCode");
  window.intlTelInput(input, {
    initialCountry: "in",
    sepseparateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  });
  // $("#countryCode").intlTelInput({
  //   initialCountry: "in",
  //   separateDialCode: true,
  //   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  // });
  // $('.numberOfRoom').inputmask({"mask": "999[Room]" });
  $('.numberOfFloors').inputmask({"mask": "99[Floor]" });
  $('.distanceKm').inputmask({"mask": "999[Km]" });
  $('.timeAirPort').inputmask({"mask": "999[Minute]" });
  $('.percentageInput').inputmask({"mask": "99[%]" });

  $('#us3').locationpicker({
      location: {
        latitude: -8.715483496557198,  
        longitude: 115.20915468127211 
          // latitude: {!! isset($coordinate[0]) ? $coordinate[0] :  '-6.2119788' !!},
          // longitude:  {!! isset($coordinate[1]) ? $coordinate[1] : '106.805129,13' !!}
          // latitude: {!! isset($latitude) ? $latitude :  '0' !!},
          // longitude:  {!! isset($longtitude) ? $longtitude : '0' !!}
      },
      zoom: 15,
      radius: false,
      inputBinding:{
        latitudeInput: $('#us3-lat'),
        longitudeInput: $('#us3-lon'),
        locationNameInput: $('#us3-name'),
      },
      
      markerInCenter: true,
      enableAutocomplete: true,
      enableAutocompleteBlur: true,
  });

   $(".dateMonth").datepicker({
        format: "yyyy-mm",
        startView: "months", 
        minViewMode: "months",
        showButtonPanel: true,
    });

   $(".timePicker").datepicker({
        format: "HH:mm",
        showButtonPanel: true,
    });

});

/*=====================
Manage Photos
=====================*/

$(document).ready(function(){

  var previewPhotos = document.querySelector('#photoTemplate');
  previewPhotos.id = "";
  var previewTemplate = previewPhotos.parentNode.innerHTML;
  previewPhotos.parentNode.removeChild(previewPhotos);
  
  photoDropZone = $(".dropZoneManagePhotos").dropzone({ 
    // addRemoveLinks: true,
    // maxFilesize: 1000,
    url               : 'http://localhost:8000/api/photo/store',
    acceptedFiles     : ".jpeg,.jpg,.png",
    previewTemplate   : previewTemplate,
    // autoQueue         : false, // Make sure the files aren't queued until manually added
    previewsContainer : "#previews", // Define the container to display the previews
    init: function() {
        this.on("addedfile", function (file) {
            var reader = new FileReader();
            reader.onload = function(event) {
                // event.target.result contains base64 encoded image
                var base64String = event.target.result;
                var fileName = file.name
                console.log(base64String ,fileName );
            };
            reader.readAsDataURL(file);

        });
    }

  });

  
  $(document).on('click', '.mainPhotosBtn', function(){
    // e.preventDefault();
    
    var mainPhotos = $(this).closest('div.row').find('img.photosImg').attr('src');
    $('img#mainPhoto').attr('src', mainPhotos);
  });



});

/*=====================
    Dashboard
=====================*/
$(document).ready( function(){
    //chart
    const ctx = document.getElementById('myChart').getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, 'rgb(102,176,212)');
    gradient.addColorStop(1, 'rgb(109,182,133)');   

    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Today', 'Yesterday', 'Las 7 Days', 'This Month'],
        datasets: [{
          label: 'Bookings',
          data: [11, 6, 14, 20],
          backgroundColor: gradient,
        //   borderWidth: 1
        }],
      },
      options: {
        scales: {
          yAxes: [{
            categoryPercentage: .5,
			      barPercentage: 1,
          }],
          y: {
            beginAtZero: true
          }
        }
      }
    });

    var ctxx = document.getElementById("chartBooking").getContext('2d');

    var chartBooking = new Chart(ctxx, {
      type: 'line',
      data: {
        labels: ["10/1", "10/2", "10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17", "10/18", "10/19", "10/20"],
        datasets: [{
          label: 'Hoterip Bookings',
          data: [35, 40, 60, 47, 88, 27, 30],
          fill: false,
          borderColor: 'rgb(102,176,212', // Add custom color border (Line)
          backgroundColor: 'rgb(102,176,212', // Add custom color background 
          borderWidth: 2,
        }, {
          label: 'MG Bookings',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#FFA836', // Add custom color border (Line)
          backgroundColor: '#FFA836', // Add custom color background 
          borderWidth: 2,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
});
