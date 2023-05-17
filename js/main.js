
$(document).ready(function () {
  $('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
  var slider = $('.gallery__row');
  $('.prev').click(function () {
    slider.slick('slickPrev');
    return false;
  });

  $('.next').click(function () {
    slider.slick('slickNext');
    return false;
  });
  $('.gallery__row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows:true,
                    adaptiveHeight:false
                }
        }
    ]
});
  $("#submit__idea").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsnspace: true
      },
      email: {
        required: true,
        email: true
      },
      unit: {
        required: true
      },
      phone: {
        required: true
      },
      idea: {
        required: true
      },
      value: {
        required: true
      }
    },
    messages: {
      name: {
        required: getRequired(".name"),
        minlength: getminlength('.name'),
        alphabetsnspace: getalphabets('.name'),
      },
      email: {
        required: getRequired(".email"),
      },
      unit: {
        required: getRequired(".unit"),
      },
      phone: {
        required: getRequired(".phone"),
      },
      idea: {
        required: getRequired(".idea"),
      },
      value: {
        required: getRequired(".value"),
      }
    }
  });
  $.validator.addMethod("alphabetsnspace", function (value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
  });
 
})
function getRequired(selector) {
  return $(selector).attr('data-required');
};
function getalphabets(selector) {
  return $(selector).attr('data-alphabetsnspace');
}
function getExtension(selector) {
  return $(selector).attr('data-extension');
}
function getminlength(selector) {
  return $(selector).attr('data-minLength');
}