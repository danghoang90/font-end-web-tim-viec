$(document).ready(function () {
  $('body').on("click","#btnCustomerPassword",function () {
    // alert(1);
    let typeValueCustomer = $('#ipnCustomerPassword').attr('type');
    typeValueCustomer = (typeValueCustomer === 'password') ? 'text' : 'password';
    $('#ipnCustomerPassword').attr('type', typeValueCustomer)
    let classIconEyeCustomer = (typeValueCustomer === 'password') ? 'fas fa-eye-slash' : 'fas fa-eye';
    $("#btnCustomerPassword .input-group-text i").removeClass();
    $("#btnCustomerPassword .input-group-text i").addClass(classIconEyeCustomer);
  })
})
$(document).ready(function () {
  $('body').on("click","#btnCustomerConfirmPassword",function () {
    // alert(1);
    let typeValueCustomer = $('#ipnCustomerConfirmPassword').attr('type');
    typeValueCustomer = (typeValueCustomer === 'password') ? 'text' : 'password';
    $('#ipnCustomerConfirmPassword').attr('type', typeValueCustomer)
    let classIconEyeCustomer = (typeValueCustomer === 'password') ? 'fas fa-eye-slash' : 'fas fa-eye';
    $("#btnCustomerConfirmPassword .input-group-text i").removeClass();
    $("#btnCustomerConfirmPassword .input-group-text i").addClass(classIconEyeCustomer);
  })
})
