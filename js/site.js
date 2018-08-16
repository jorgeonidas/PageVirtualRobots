$(document).ready(function () {
    var inicioUrl ="#" ;//default uris
    var noticiasUrl = "news/Noticias.html";//default uris
    //por si acaso 
    //var termsUri ="legal/TerminosUso.html";
    //var policyUri ="legal/PoliticaPrivacidad.html"
    var currLocation = window.location.href;
    console.log(currLocation);

    var pageName = getPageName(currLocation);
    console.log( pageName );
    //sobrescribimos las uris dependiendo de la pagina
    switch (pageName) {
        case "Noticias.html":
            console.log("en noticias");
                var inicioUrl ="../index.html" ;//default uris
                var noticiasUrl = "#";//default uris
                //por si acaso 
                //var termsUri ="../legal/TerminosUso.html";
                //var policyUri ="../legal/PoliticaPrivacidad.html"
            break;
        case "TerminosUso.html":
        case "PoliticaPrivacidad.html":
            console.log("en tu");
            var inicioUrl ="../index.html" ;//default uris
            var noticiasUrl = "../news/Noticias.html";//default uris
            //por si acaso 
            //var termsUri ="legal/TerminosUso.html";
            //var policyUri ="legal/PoliticaPrivacidad.html"
            break;
        default:
            console.log("en index"); 
            break;
    }

    appendMainNav(logoSrc, inicioUrl, noticiasUrl);

    /*2d array of languages*/
        var aLangKeys = new Array();
        aLangKeys['en'] = new Array();
        aLangKeys['es'] = new Array();
        /*words */
        aLangKeys['es']['home'] = "Inicio";
        aLangKeys['es']['news'] = "Noticias";
        aLangKeys['es']['products'] = "Productos";
        aLangKeys['es']['log-in'] = "Ingresar";
        aLangKeys['es']['sign-in'] = "Registro";
        aLangKeys['es']['ollie-keyboard-ad'] = "Ya puedes llevar a Ollie contigo a todos lados!";
        aLangKeys['es']['see-more'] = "Ver más >";
        aLangKeys['es']['read-more'] = "Leer más »";
        aLangKeys['es']['copyright'] = "© 2016 - 2018 Virtual Robot®. Biowiza S.A. Todos los derechos reservados. Costa Rica. Puedes revisar nuestros";
        aLangKeys['es']['legal-terms'] = "Términos de Uso";
        aLangKeys['es']['and'] = "y";
        aLangKeys['es']['legal-policy'] = "Política de Privacidad";

        //pagina de terminos de uso
        aLangKeys['es']['lt1'] = "Elegibilidad";
        aLangKeys['es']['lt2'] = "Privacidad";
        aLangKeys['es']['lt3'] = "Propiedad";
        aLangKeys['es']['lt4'] = "Licencia limitada";
        aLangKeys['es']['lt5'] = "Contenido de usuario y áreas interactivas";
        aLangKeys['es']['lt6'] = "Uso aceptable de los servicios";
        aLangKeys['es']['lt7'] = "Registro y seguridad";
        aLangKeys['es']['lt8'] = "Servicios de modificación / terminación";
        aLangKeys['es']['lt9'] = "Exención de garantías y limitación de responsabilidad";
        aLangKeys['es']['lt10'] = "Indemnidad";
        aLangKeys['es']['lt11'] = "Resolución de conflictos; Arbitraje individual vinculante; Renuncia de acción de clase";
        aLangKeys['es']['lt12'] = "Misceláneo";
        aLangKeys['es']['lt13'] = "Cambios a estos términos";


        aLangKeys['en']['home'] = "Home";
        aLangKeys['en']['news'] = "News";
        aLangKeys['en']['products'] = "Products";
        aLangKeys['en']['log-in'] = "Login";
        aLangKeys['en']['sign-in'] = "Signin";
        aLangKeys['en']['ollie-keyboard-ad'] = "Now you can take Ollie by everywhere!";
        aLangKeys['en']['see-more'] = "See More >";
        aLangKeys['en']['read-more'] = "Read More »";
        aLangKeys['en']['copyright'] = "© 2016 - 2018 Virtual Robot®. Biowiza S.A. All Rights Reserved. Costa Rica. You can check our";
        aLangKeys['en']['legal-terms'] = "Terms of Use";
        aLangKeys['en']['and'] = "and";
        aLangKeys['en']['legal-policy'] = "Privacy Policy";

        //terms of use
        aLangKeys['en']['lt1'] = "Eligibility";
        aLangKeys['en']['lt2'] = "Privacy";
        aLangKeys['en']['lt3'] = "Property";
        aLangKeys['en']['lt4'] = "Limited License";
        aLangKeys['en']['lt5'] = "User content and interactive areas";
        aLangKeys['en']['lt6'] = "Acceptable use of services";
        aLangKeys['en']['lt7'] = "Registration and security";
        aLangKeys['en']['lt8'] = "Modification / termination services";
        aLangKeys['en']['lt9'] = "Exemption of guarantees and limitation of liability";
        aLangKeys['en']['lt10'] = "Indemnity";
        aLangKeys['en']['lt11'] = "Conflict resolution; Individual binding arbitration; Class action waiver";
        aLangKeys['en']['lt12'] = "Miscellaneous";
        aLangKeys['en']['lt13'] = "Changes to these terms";
      
        const spanis_lc = "es";
        const english_lc = "en";
        curr_lang = spanis_lc;
        var public_ip;
    /*ipfi */
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
        function (json) {
            public_ip = json.ip;
            console.log(json.ip);
            
            $.getJSON('http://api.ipstack.com/' + public_ip + '?access_key=74eda19312e616de81089ad81ac39014', function (data) {
 
                var language_code = data.location.languages[0].code;
                console.log("codigo lenguaje", language_code);
                
                if (language_code != spanis_lc) {
                    curr_lang = english_lc;
                }
                console.log("current language", curr_lang);

                $('.tr').each(function (i) {
                    $(this).text(aLangKeys[curr_lang][$(this).attr('key')]);
                });
    
            });
        }

    );

	$('.carousel').carousel({
		interval: 3000
	})
    $("#liInicio").hover();
    
    var logoSrc;

	if ($(window).width() > 739) {
		$("#footer").addClass("fixed-bottom ");
        $("#navBarBrand").attr("src", "http://virtualrobot-website.s3-website.us-east-2.amazonaws.com/images/LogoGris.png");
        logoSrc ="http://virtualrobot-website.s3-website.us-east-2.amazonaws.com/images/LogoGris.png";
		$("#footer-p").removeClass("text-center");
	}

	else {
		$("#footer").removeClass("fixed-bottom ");
        $("#navBarBrand").attr("src", "http://virtualrobot-website.s3-website.us-east-2.amazonaws.com/images/LogoGrisMovil.png");
        logoSrc = "http://virtualrobot-website.s3-website.us-east-2.amazonaws.com/images/LogoGrisMovil.png"
		$("#footer-p").addClass("text-center");
		//movil slider images
		$("#firstSlide").attr("src", "images/Movil/Slider_OllieCharacters.png");
		$("#secondSlide").attr("src", "images/Movil/MovilSlider_OllieKeyboardAd.jpg");
		$("#thirdSlide").attr("src", "images/Movil/SliderOlliePersonajesFutbolin.png");
    }
    
    //$.cookieBar({});
});
//para obtener el nombre de nuestra pagina actual y asi asignar las uris
function getPageName(currLocation){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    page.split('#');
    return page;
}

//para concatenar nav
function appendMainNav(logo,homeUrl, newsUrl){
    const htmlNav = `<button id="sidebar-target" class="navbar-toggler" type="button" aria-controls="navbarToggler"
        aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
  
       <!-- Brand/logo -->
       <a class="navbar-brand mx-auto" href="#">
           <img class="d-block" id="navBarBrand" src="`+logo+`" alt="Logo">
       </a>

       <div class="collapse navbar-collapse" id="navbarToggler">
           <!-- Links -->
           <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
               <li class="nav-item " id="liInicio">
                   <a class="nav-link tr" key="home"  href="`+homeUrl+`">Inicio</a>
               </li>
               <li class="nav-item ">
                   <a class="nav-link tr" key="news"  href="`+newsUrl+`">Noticias</a>
               </li>
               <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle tr" key="products" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                       Productos
                   </a>
                   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                       <a class="dropdown-item" href="#">Ollie Keyboard</a>
                     </div>
               </li>
           </ul>

           <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
               <li class="nav-item">
                   <a class="nav-link tr" key="sign-in" id="registro-btn" href="#">
                       <i class="fa fa-user-o navbar-toggler border-0" style="padding-left: 0%" aria-hidden="true">			
                       </i>
                       Registro
                   </a>
               </li>
           </ul>
       </div>

       <button style="font-size: 20px" class="navbar-toggler signIn" type="button">
           <span class="">
               <i class="fa fa-user-o" aria-hidden="true"></i>
           </span>
       </button>`;
    
    const customSideMenuHtml = `<ul class="nav navbar-nav mr-auto mt-2 mt-lg-0 customUlSidenav">
            <li class="nav-item " id="liInicio">
                <a class="nav-link tr" key="home" href="`+homeUrl+`">Inicio</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link tr" key="news" href="`+newsUrl+`">Noticias</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" key="products" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" onclick="toggleProducts()">
                <p style="margin: 0 ; display: inline" class="tr">Productos</p> <img id="drop-arrow" src="https://gdurl.com/9-UM" alt="">
                </a>
            </li>
            <ul class="nav navbar-nav" id="productList">
                <li  class="nav-item" >
                    <a class="nav-link " href="#"> <img id="ollie-kb-icon" class="icon-img"  src="https://gdurl.com/Drb8" alt="">Ollie Keyboard</a>
                </li>
            </ul>
        </ul>
        <ul id="login" class="nav navbar-nav">
            <li class="nav-item">
                <a class="nav-link tr" key="log-in" id="registro-btn" href="#" onclick="login()">
                    <i class="fa fa-user-o navbar-toggler border-0" style="padding-left: 0%" aria-hidden="true">
                    </i>
                    Ingresar
                </a>
            </li>
        </ul>
        <div id="account-info">
            <div class="row" style="padding-left: 3vw">
                <div class="col" >
                    <div class="row">
                        <div class="col accoutn-data-wrapper"><img class="icon-img"  src="https://gdurl.com/ZgNV" alt="">Ollie</div>
                    </div>
                    <div class="row">
                        <div class="col accoutn-data-wrapper"><img class="icon-img"  src="https://gdurl.com/5km0" alt="">999999</div>
                    </div>
                </div>
                <div class="col" style="padding: 0; height: 6rem;">
                    <a href="#" class="arrow-wrapper" onclick="logout()" style="width: 100%; height: 100%">
                        <img src="https://gdurl.com/QFzVf" class="flip-arrow" style="width: 30%; height: 30%;" alt="">
                    </a>
                </div>
            </div>
        </div>`;

    $("#main-nav").append(htmlNav);
    $("#menu-contents").append(customSideMenuHtml);
}

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
