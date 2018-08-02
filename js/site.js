	$(document).ready(function () {
			$('.carousel').carousel({
				interval: 3000
			})

			$("#liInicio").hover();
			if ($(window).width() > 739) {
				$("#footer").addClass("fixed-bottom ");
				$("#navBarBrand").attr("src", "http://virtualrobot-website.s3-website.us-east-2.amazonaws.com/images/LogoGris.png");
				$("#footer-p").removeClass("text-center");
			}

			else {

				$("#footer").removeClass("fixed-bottom ");
				$("#navBarBrand").attr("src", "http://virtualrobot-website.s3-website.us-east-2.amazonaws.com/images/LogoGrisMovil.png");
				$("#footer-p").addClass("text-center");
			}
			$.cookieBar({});
		});
		//scroll function
		window.onscroll = function () { scrollToRenderBtn() };

		function scrollToRenderBtn() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				
				$('#toTopBtn').show();
				
			} else {
				$('#toTopBtn').hide();
			}
		}
		

		function topTop() {
			//document.body.scrollTop = 0;
			//document.documentElement.scrollTop = 0;
			$('html, body').animate({scrollTop:0},500);
		}

