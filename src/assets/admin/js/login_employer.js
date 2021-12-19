

$(document).ready(function () {
  $('#btnPassword').click(function () {
    // alert(1);
    let typeValue = $('#ipnPassword').attr('type');
    typeValue = (typeValue === 'password') ? 'text' : 'password';
    $('#ipnPassword').attr('type', typeValue)
    let classIconEye = (typeValue === 'password') ? 'fas fa-eye-slash' : 'fas fa-eye';
    $("#btnPassword .input-group-text i").removeClass();
    $("#btnPassword .input-group-text i").addClass(classIconEye);
  })
})
