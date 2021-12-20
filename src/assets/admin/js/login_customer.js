$(document).ready(function () {
  $('#btnCustomerPassword').click(function () {
    // alert(1);
    let typeValue = $('#ipnCustomerPassword').attr('type');
    typeValue = (typeValue === 'password') ? 'text' : 'password';
    $('#ipnCustomerPassword').attr('type', typeValue)
    let classIconEye = (typeValue === 'password') ? 'fas fa-eye-slash' : 'fas fa-eye';
    $("#btnCustomerPassword .input-group-text i").removeClass();
    $("#btnCustomerPassword .input-group-text i").addClass(classIconEye);
  })
})
