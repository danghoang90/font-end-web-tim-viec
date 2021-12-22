

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
$(document).ready(function () {
  $('body').on("click","#btnEmployerConfirmPassword",function () {
    // alert(1);
    let typeValue = $('#ipnEmployerConfirmPassword').attr('type');
    typeValue = (typeValue === 'password') ? 'text' : 'password';
    $('#ipnEmployerConfirmPassword').attr('type', typeValue)
    let classIconEye = (typeValue === 'password') ? 'fas fa-eye-slash' : 'fas fa-eye';
    $("#btnEmployerConfirmPassword .input-group-text i").removeClass();
    $("#btnEmployerConfirmPassword .input-group-text i").addClass(classIconEye);
  })
})
