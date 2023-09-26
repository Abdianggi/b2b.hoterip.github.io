/*
=====================
Manage Promotions Page
=====================
*/
$(document).ready(function () {
  $('#hideChecked').on('click', function () {
    var hideChecked = $('.checkboxSelected').is(':checked');
    $('.checkboxSelected').each(function () {
      if ($(this).is(':checked')) {
        $(this).closest('.row-color').css('background-color', '#F2DEDE');
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

  $('#deleteChecked').on('click', function () {
    var deleteChecked = $('.checkboxSelected').is(':checked');
    $('.checkboxSelected').each(function () {
      if ($(this).is(':checked')) {
        $(this).closest('.row-color').remove();
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

  $('#showChecked').on('click', function () {
    var showChecked = $('.checkboxSelected').is(':checked');
    $('.checkboxSelected').each(function () {
      if ($(this).is(':checked')) {
        $(this).closest('.row-color').css('background-color', '#DFF0D8');
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
  $('.btn-promotion-edit').on('click', function () {
    console.log('show modal');
    window.location.href = 'manage-promotion-edit.html';
  });

  $(document).on('click', '#addBenefit', function () {
    $('#addBenefit').addClass('d-none');
    $('#benefit').append(`
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>#</th>
            <th>Other Benefit</th>
            <th>For</th>
            <th>
              <button id="addBenefitTable" class="btn btn-primary">+</button>
            </th>
          </tr>
        </thead>
        <tbody id="benefitTableBody">
          <tr class="tr-benefit">
            <td>1</td>
            <td>
              <div class="">
                <!-- <div for="exampleFormControlInput1 fs-5" class="form-label">Type</div> -->
                <select class="form-select borderadius" aria-label="Default select example">
                    <option selected="">Standard Promotion</option>
                    <option value="">
                        Early Bird
                    </option>
                </select>
              </div>
            </td>
            <td>
              <input type="text" class="form-control" style="border-radius: 5px;">
            </td>
            <td>
              <button class="btn btn-danger deleteBenefit" style="font-size: 0.85rem;">
                <span class="material-symbols-outlined">
                  delete
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  $('#addBenefitTable').on('click', function () {
    $('#benefitTableBody').append(`
      <tr class="tr-benefit">
        <td>1</td>
        <td>
          <div class="">
            <!-- <div for="exampleFormControlInput1 fs-5" class="form-label">Type</div> -->
            <select class="form-select borderadius" aria-label="Default select example">
                <option selected="">Standard Promotion</option>
                <option value="">
                    Early Bird
                </option>
            </select>
          </div>
        </td>
        <td>
          <input type="text" class="form-control" style="border-radius: 5px;">
        </td>
        <td>
          <button class="btn btn-danger deleteBenefit" style="font-size: 0.85rem;">
            <span class="material-symbols-outlined">
              delete
            </span>
          </button>
        </td>
      </tr>
    `);
  });

  $(document).on('click', '.deleteBenefit', function () {
    var deleteBenefit = $('.deleteBenefit').length;
    if (deleteBenefit == 1) {
      $('#benefit').addClass('d-none');
      $('#addBenefit').removeClass('d-none');
    } else {
      $(this).closest('.tr-benefit').remove();
    }
  });
  // deleteBenefit();
  // let deleteBenefit = function(){
  // }
});
