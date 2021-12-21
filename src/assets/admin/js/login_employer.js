

$(document).ready(function () {
  $('body').on("click","#btnEmployerPassword",function () {
    // alert(1);
    let typeValue = $('#ipnEmployerPassword').attr('type');
    typeValue = (typeValue === 'password') ? 'text' : 'password';
    $('#ipnEmployerPassword').attr('type', typeValue)
    let classIconEye = (typeValue === 'password') ? 'fas fa-eye-slash' : 'fas fa-eye';
    $("#btnEmployerPassword .input-group-text i").removeClass();
    $("#btnEmployerPassword .input-group-text i").addClass(classIconEye);
  })
})
