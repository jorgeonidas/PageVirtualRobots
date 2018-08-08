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
		//movil slider images
		$("#firstSlide").attr("src", "images/Movil/Slider_OllieCharacters.png");
		$("#secondSlide").attr("src", "images/Movil/MovilSlider_OllieKeyboardAd.jpg");
		$("#thirdSlide").attr("src", "images/Movil/SliderOlliePersonajesFutbolin.png");
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
	$('html, body').animate({ scrollTop: 0 }, 500);
}

function toggleProducts(){
    console.log("clic prod");
    if(!$('#productList').is(':visible')){
        $("#productList").show();  
    }else{
        $("#productList").hide();  
    }
     
}

//Sidemenu algoritms
(() => {
    
    let sidebarOpen = false
    let locked = false

    function createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
      }

    function onMenuBackdropClicked(){
        closeSidebar()
    }

    function openSidebar(){
        sidebarOpen = true
        const body = document.getElementsByTagName("body")[0];

        const contents = document.getElementById("menu-contents");

        const htmlString = `
            <div class="menu-container" id='menu-container'>
                <div class="menu bg-dark" id='menu'>
                    
                </div>
            </div>
        
        `;

        const menuContainer = createElementFromHTML(htmlString);

        body.insertBefore(menuContainer,document.body.childNodes[0])
        //body.appendChild(menuContainer);

        const menu = document.getElementById("menu");

        menu.appendChild(contents);

        menuContainer.addEventListener('click', onMenuBackdropClicked)

        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        contents.style.display = 'block'
        
    }

    function closeSidebar(){
        sidebarOpen = false

        const body = document.getElementsByTagName("body")[0];
        const contents = document.getElementById("menu-contents");
        contents.style.display = 'none';
        body.appendChild(contents);
        
        const menuContainer = document.getElementById('menu-container');

        menuContainer.removeEventListener('click', onMenuBackdropClicked);
        body.removeChild(menuContainer);
        
    }

    window.addEventListener('load', () => {
        const sidebarButton = document.getElementById('sidebar-target')

        if(sidebarButton){
            sidebarButton.addEventListener('click', () => {
                if(locked){
                    return
                }
                locked = true
                if(sidebarOpen){
                    closeSidebar();
                }else{
                    openSidebar();
                }
                locked = false
            });
        }
    });
})();
