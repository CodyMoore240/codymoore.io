$(window).load(function() {
  // ADD CLASS TO TRIGGER CSS3 FADE IN
  $('html').addClass('loaded');

  //custom select boxes
  $("select").wrap("<div class='selectWrapper'></div>");

  //add class to the html tag if the scroll is not in the first position. Only do it if it is on the homepage
  if(window.location.pathname == "/") {
    $(window).scroll(function() {
    	if($('html,body').scrollTop() !== 0 || $('body').scrollTop() !== 0){
    		$('html').addClass('scrollHeader fixedWhiteHeader');
    	} else {
    		$('html').removeClass('scrollHeader fixedWhiteHeader');
    	}
    });
  }

  if(window.location.pathname == "/") {
    if($('html,body').scrollTop() !== 0 || $('body').scrollTop() !== 0){
      $('html').addClass('scrollHeader fixedWhiteHeader');
      console.log('true');
    } else {
      $('html').removeClass('scrollHeader fixedWhiteHeader');
      console.log('false');
    }
  }

  //offset for coming from another page
  if(window.location.pathname == "/" && window.location.hash !== "") {
    $('html,body').scrollTop($(document).scrollTop() -100);
  }

  // smooth scrolling
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
          var targetOffset = $target.offset().top - 100;
          $('html,body').animate({scrollTop: targetOffset}, 1000);
          return false;
      }
    }
  });

  //contact form functionality
  $('form').validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },
    errorPlacement: function(error,element) {
        return true;
    },
    invalidHandler: function (event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        $(".error_strings").show();
      } else {
        $(".error_strings").hide();
      }
    },
    submitHandler: function() {
      // do other things for a valid form
      // CONTACT FORM SUBMIT. Start by processing the form
      // get the form data
      var formData = {
          'name'              : $('input[name=name]').val(),
          'email'             : $('input[name=email]').val(),
          'message'           : $('textarea[name=message]').val()
      };

      // process the form
      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : 'http://dansorganic.com/nonRelated/formHandlers/contact-form-handler.php', // the url where we want to POST
          data        : formData, // our data object
          dataType    : 'json', // what type of data do we expect back from the server
          encode          : true
      });
      // using the done promise callback
      $('.contactSection_heading').text("Thanks! Your message has been sent!");
      $('#contactForm').slideUp();
      // .done(function(data) {

        // // here we will handle errors and validation messages
        // if ( ! data.success) {
        //   //place error here if you would like one
        //
        // } else {
        //
        //   // ALL GOOD! just show the success message! You can put whatever HTML you want here. Also you can write as much JQuery as you want here. I just appended the word thanks to the form and then hid the form.
        //
        //
        //
        //   // usually after form submission, you'll want to redirect
        //   // window.location = '/thank-you'; // redirect a user to another page
        //
        // }
      // });
    }
  });
});
