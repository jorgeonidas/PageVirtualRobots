/*2d array of languages*/
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['es']=new Array();
/*words */
aLangKeys['es']['home']="Inicio";
aLangKeys['es']['news']="Noticias";
aLangKeys['es']['products']="Productos";
aLangKeys['es']['log-in']="Ingresar";
aLangKeys['es']['sign-in']="Registro";
aLangKeys['es']['ollie-keyboard-ad']="Ya puedes llevar a Ollie contigo a todos lados!";
aLangKeys['es']['see-more']="Ver más >";
aLangKeys['es']['read-more']="Leer más »";
aLangKeys['es']['copyright']="© 2016 - 2018 Virtual Robot®. Biowiza S.A. Todos los derechos reservados. Costa Rica. Puedes revisar nuestros";
aLangKeys['es']['legal-terms']="Términos de Uso";
aLangKeys['es']['legal-policy']="Política de Privacidad";

aLangKeys['en']['home']="Home";
aLangKeys['en']['news']="News";
aLangKeys['en']['products']="Products";
aLangKeys['en']['log-in']="Login";
aLangKeys['en']['sign-in']="Signin";
aLangKeys['en']['ollie-keyboard-ad']="Now you can take Ollie by everywhere!";
aLangKeys['en']['see-more']="See More >";
aLangKeys['en']['read-more']="Read More »";
aLangKeys['en']['copyright']="© 2016 - 2018 Virtual Robot®. Biowiza S.A. All Rights Reserved. Costa Rica. You can check our";
aLangKeys['en']['legal-terms']="Terms of Use";
aLangKeys['en']['legal-policy']="Privacy Policy";

$(document).ready(function () {

    /*Testeando traduccion */
    $('.lang').click(function () {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.tr').each(function (i) {
            $(this).text(aLangKeys[lang][$(this).attr('key')]);
        });
    });
        

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
    if( !$('#productList').is(':visible') ){
        $("#productList").show(); 
    }else{
        $("#productList").hide();

    }
    console.log("flipping arrow");
    
    $("#drop-arrow").toggleClass('flip-dropdown');
     
}

function login(){
    console.log("clic acc");
    if(!$('#account-info').is(':visible')){
        $("#account-info").show();
        $("#login").hide();  
    }
}

function logout(){
    $("#account-info").hide();
    $("#login").show();  
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
