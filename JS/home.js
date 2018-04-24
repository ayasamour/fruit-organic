$(document).ready(function () {

    $('.img-over-2').hover(function () {
        $(this).find('.img-two').show();
        $(this).find('.img-one').hide();
    }, function () {
        $(this).find('.img-two').hide();
        $(this).find('.img-one').show();
    });
    $('.product-rel').hover(function () {
        $(this).find('.product-overlay').show();
        $(this).find('.img-two').show();
        $(this).find('.img-one').hide();

    }, function () {
        $(this).find('.product-overlay').hide();
        $(this).find('.img-two').hide();
        $(this).find('.img-one').show();

    });
    $(window).scroll(function () {
        var navbar=$('.navbar');

      if($(window).scrollTop()>= navbar.height()){
        navbar.addClass('scrolled');
          navbar.addClass('navbar-fixed-top');
      }else{
        navbar.removeClass('scrolled');

        navbar.removeClass('navbar-fixed-top');
      }
    })
    $('#datetimepicker2').datetimepicker({
        // dateFormat: 'dd-mm-yy',
        format:'DD/MM/YYYY ',
        minDate: getFormattedDate(new Date())
    });

   
    function getFormattedDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear().toString().slice(2);
        return day + '-' + month + '-' + year;
    }
    /*window.onscroll = function() {scrollFunction()};*/

   /** function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
**/
// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Chrome, Safari and Opera
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }
    $("body").niceScroll();
    var offset = 250;

    var duration = 300;

/************************************************///
    var scrollTopArea=$("#scroll-top-area");
    $(window).on("scroll", function() {
        var top2 = $(window).scrollTop();
        if (top2 < 150) {
            scrollTopArea.css('display', 'none');
        } else if (top2 >= 150) {
            scrollTopArea.css('display', 'block');
        }
    });
    var pagebody=$('html, body');

    scrollTopArea.on("click", function() {
        pagebody.animate({
            scrollTop: 0
        }, 2000);
    });
 
 var scroll = new SmoothScroll('a[href*="#"]');
 
/***************************************************/
    $( "#fb_submit" ).on("click",function() {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $(".myform");
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({

            doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.

            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                fb_name: {
                    required: true
                },
                fb_email: {
                    required: true

                },
                fb_phone: {
                    required: true
                },
                fb_time: {
                    required: true
                }            },

            messages: {
                'fb_name':{
                    required: "This field is required. ",
                },
                'fb_email':{ required: "This field is required.",
                },
                ' fb_phone':{
                    required: "This field is required.",
                },
                'fb_time':{ required: "This field is required.",
                },


            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
                $(element).closest('.form-group').removeClass('has-success');
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                $(element).closest('.form-group').addClass('has-success');
            },
            success: function (label) {
                label.closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
            },


        });

    });







});