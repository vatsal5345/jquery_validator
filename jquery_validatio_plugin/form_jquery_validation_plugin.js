$(document).ready(function() {
  $('form').validate({
    rules: {
      fname : {
        required: true,
        minlength:3,
        onlyalpha:true
      },
      lname : {
        required: true,
        minlength:3,
        onlyalpha:true
      },
      staddress : {
        required: true,
        minlength:3,
        maxlength:100,
        address:true
      },
      staddress2 : {
        required: true,
        minlength:3,
        maxlength:100,
        address:true
      },
      city : {
        required: true,
        minlength:3,
        maxlength:100,
        onlyalpha:true
      },
      state : {
        required: true,
        minlength:3,
        maxlength:100,
        onlyalpha:true
      },
      zipcode: {
        required: true,
        maxlength:6,
        minlength:6,
        zipcode:true
      },
      phone: {
        required: true,
        maxlength:10,
        phone:true
      },
      email: {
        required: true,
        email:true
      },
      feedback: {
        required: true,
        maxlength:100,
        feedback:true
      },
      feedback2: {
        required: true,
        maxlength:100,
        feedback2:true
      },
      gender:{
        required:true
      }
      
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {

          error.insertAfter("#other");
      }
      else { // This is the default behavior of the script for all fields
          error.insertAfter(element);
      }
  }
  
  });
  $.validator.addMethod('onlyalpha',function(value){
    return /^[a-zA-Z]*$/.test(value);
  }, "please enter a valid details");
  $.validator.addMethod('address',function(value){
    return /^[a-zA-Z0-9\s\,\''\-]*$/.test(value);
  }, 'please enter a valid address');
  $.validator.addMethod('zipcode',function(value){
    return /[1-9]{1}[0-9]{5}$/.test(value);
  }, 'please enter a valid zipcode');
  $.validator.addMethod('phone',function(value){
    return /\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/.test(value); 
  }, 'please enter a valid phone number');

  
});

