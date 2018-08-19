
var sidebarOpen = false
var locked = false
$(document).ready(function () {
    //removeActive();
    //altura altura del contenido en proporcion con respecto al documento
    contentHeight =Math.floor( $('#main').height() / $('#main').parent().height() * 100);
    console.log("alto del doc",contentHeight,'%');
    
    //chequeando altura del contenido para posicionar footer al fondo
    if(contentHeight< 70){
        $(".footer").addClass("bottom-footer");
    }
    
    var inicioUrl ="#" ;//default uris
    var noticiasUrl = "news/Noticias.html";//default uris
    //por si acaso 
    var termsUri ="legal/TerminosUso.html";
    var policyUri ="legal/PoliticaPrivacidad.html"
    var ollieKeyboardUri ="news/details/OllieKeyboardnews.html"
    var currLocation = window.location.href;
    console.log(currLocation);

    var pageName = getPageName(currLocation);
    console.log( pageName );
    //sobrescribimos las uris dependiendo de la pagina
    switch (pageName) {
        case "Noticias.html":
            console.log("en noticias");
               inicioUrl ="../index.html" ;//default uris
                noticiasUrl = "#";//default uris
                //por si acaso 
                termsUri ="../legal/TerminosUso.html";
                policyUri ="../legal/PoliticaPrivacidad.html"
                ollieKeyboardUri ="details/OllieKeyboardnews.html"
                
            break;
        case "TerminosUso.html":
        case "PoliticaPrivacidad.html":
            console.log("en tu");
            inicioUrl ="../index.html" ;//default uris
            noticiasUrl = "../news/Noticias.html";//default uris
            //por si acaso 
            termsUri ="TerminosUso.html";
            policyUri ="PoliticaPrivacidad.html"
            ollieKeyboardUri ="../news/details/OllieKeyboardnews.html"
            break;
        case "OllieKeyboardnews.html":
            inicioUrl ="../../index.html" ;//default uris
            noticiasUrl = "../../news/Noticias.html";//default uris
            termsUri ="../../legal/TerminosUso.html";
            policyUri ="../../legal/PoliticaPrivacidad.html"
            ollieKeyboardUri="#";
        break;
        default:
            console.log("en index");

            break;
    }
    
    appendMainNav(logoSrc, inicioUrl, noticiasUrl,ollieKeyboardUri);
    currentActivePage(pageName);
    appendFooter(termsUri,policyUri);
    

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
        aLangKeys['es']['ppu'] = "Última actualización: 04/2018"
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
        //pagina de politica de privacicad
        aLangKeys['es']['ppt'] = "Política de privacidad de Virtual Robot";
        
        aLangKeys['es']['pp1'] = "1. Tipos de información que recopilamos";
        aLangKeys['es']['pp2'] = "2. Cómo usamos tu información";
        aLangKeys['es']['pp3'] = "3. Cómo se comparte su información";
        aLangKeys['es']['pp4'] = "4. Tus controles y elecciones";
        aLangKeys['es']['pp5'] = "5. Seguridad de la información";
        aLangKeys['es']['pp6'] = "6. Información sobre niños";
        aLangKeys['es']['pp7'] = "7. Cambios";
        aLangKeys['es']['pp8'] = "8. Información de contacto";

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
        aLangKeys['en']['ppu'] = "Last update: 04/2018"
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

        aLangKeys['en']['tp1'] = `These Terms of Use (the "Terms") apply to your access to, and use of, `;
        aLangKeys['en']['tp2'] = `and any other website or service that links to these Terms (collectively, the "Services"). The Services are provided by Virtual Robot, Biowiza S.A. ("Virtual Robot", “Biowiza S.A.”, or "we") and your use of the Services is subject to these Terms. These Terms do not alter, in any way, the terms or conditions of any other agreement you may have with Virtual Robot for products, services or otherwise.`;
        aLangKeys['en']['tp3'] = `PLEASE READ THESE TERMS OF USE CAREFULLY. BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED HEREIN AND ALL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT USE OUR SERVICES.`;
        aLangKeys['en']['tp4'] = `The Services may not be used by anyone under the age of 18 without the supervision of a parent or legal guardian who agrees to be bound by these Terms. You represent and warrant that you are at least 18 years of age (or the age of legal majority under applicable law), or, if not, that you have reviewed these Terms with your parent or legal guardian and that he or she has agreed to be bound by these Terms.`;
        aLangKeys['en']['tp5'] = `Please refer to our`;
        aLangKeys['en']['tp6'] = `for information about how we collect, use and share information about users of our Services.`;
        aLangKeys['en']['tp7'] = `Virtual Robot Materials. The Services contain content including, without limitation, Virtual Robot’s logos, and all designs, text, graphics, pictures, information, data, software, sound files, other files and the selection and arrangement thereof (collectively, the "Materials") that are the proprietary property of Virtual Robot or Virtual Robot’s licensors and are protected by Costa Rican and international laws.`;
        aLangKeys['en']['tp8'] = `User Content. The Services may permit you or other users to create, post, send or store messages, photos, text and other materials ("User Content"). Virtual Robot claims no ownership or control, takes responsibility for, or assumes liability for any User Content posted, stored `;
        aLangKeys['en']['tp9'] = `Third Party Content. The Services may include third-party content and links to websites or content owned or operated by third parties (collectively, "Third-Party Content"). Virtual Robot does not own, control or endorse any Third-Party Content and makes no representation or warranties of any kind regarding the Third-Party Content. You acknowledge and agree that Virtual Robot is not responsible or liable in any manner for any Third-Party Content and undertakes no responsibility to update or review any Third-Party Content. Users use such Third-Party Content at their own risk.`;
        aLangKeys['en']['tp10'] = `Virtual Robot. Virtual Robot grants you a limited, non-sublicensable license to access and use the Services for your personal use only. Such license is subject to these Terms and does not include: (a) any resale or commercial use of the Services or the Materials therein; (b) the distribution, public performance or public display of any Materials; (c) modifying or otherwise making any derivative uses of the Services or the Materials, or any portion thereof; (d) downloading (other than the page caching) of any portion of the Services, the Materials or any information contained therein, except as expressly permitted on the Services; or (f) any use of the Services or the Materials other than for their intended purposes. Any use of the Services or the Materials other than as specifically authorized herein, without the prior written permission of Virtual Robot, is strictly prohibited and will terminate the license granted herein. Such unauthorized use may also violate applicable laws, including without limitation copyright and trademark laws and applicable communications regulations and statutes. Unless explicitly stated herein, nothing in these Terms shall be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise. Virtual Robot may revoke this license at any time.`;
        aLangKeys['en']['tp11'] = `Users. If you submit or post User Content to the Services, unless we indicate otherwise, you grant Virtual Robot a worldwide, royalty-free, irrevocable, perpetual, non-exclusive, and sublicenseable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display such User Content in whole or in part and to incorporate such User Content in other works, in any form, media or technology now known or later developed, including for promotional or marketing purposes. By submitting or posting User Content to the Services, you represent and warrant that: (a) such User Content is non-confidential; (b) you own and control all of the rights to the User Content that you post or you otherwise have all necessary rights to post such User Content to the Services; (c) the User Content is accurate and not misleading or harmful in any manner; and (d) the User Content, and your use and posting thereof in connection with the Services, does not and will not violate these Terms or any applicable law, rule or regulation.`;
        aLangKeys['en']['tp12'] = `Some of our Services include interactive areas ("Interactive Areas"), in which you or other users may, among other things, create, post, send, or store User Content. When you participate in Interactive Areas, you understand that certain User Content may be displayed publicly or to select users. You are solely responsible for your use of the Services and the Interactive Areas and use them at your own risk.`;
        aLangKeys['en']['tp13'] = `These Terms do not create any reasonable expectation or promise that the Services will not contain any content that is prohibited by the Terms. Although Virtual Robot has no obligation to screen, edit or monitor any of the User Content posted on the Services, Virtual Robot reserves the right, and has absolute discretion, to access, use, monitor, disclose or preserve information associated with your use of the Services, including, without limitation, User Content, or information that Virtual Robot acquires about you through your use of the Services, when Virtual Robot forms a good faith belief that doing so is necessary (a) to comply with applicable law or to respond to legal process from competent authorities; (b) to enforce these Terms or protect the rights or property rights of Virtual Robot or its users; (c) to help prevent a loss of life or serious physical injury to anyone; or (d) prevent potentially illegal or offensive activities.`;
        aLangKeys['en']['tp14'] = `You agree that your use of the Services, including the posting of User Content, will not violate any law, contract, intellectual property or other third-party right or constitute a criminal action or tort, and that you are solely responsible for your conduct while on the Services. You further agree not to:`;
        aLangKeys['en']['tp15'] = `Use the Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying the Services, or that could damage, disable, overburden or impair the functioning of the Services in any manner;`;
        aLangKeys['en']['tp16'] = `Engage in any discriminatory, defamatory, libelous, hateful, harassing, abusive, obscene, threatening, physically dangerous, unlawful, or otherwise objectionable conduct;`;
        aLangKeys['en']['tp17'] = `Attempt to indicate in any manner that you have a relationship with us or that we have endorsed you or any products or services for any purpose;`;
        aLangKeys['en']['tp18'] = `Send any unsolicited or unauthorized advertising, solicitations, promotional materials, spam, junk mail, chain letters or pyramid schemes, or harvest or collect the email addresses or other contact information of other users from the Services for the purpose of sending spam or other commercial messages;`;
        aLangKeys['en']['tp19'] = `Attempt to reverse engineer any aspect of the Services or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any area, content or code of the Services (except as otherwise expressly permitted by law);`;
        aLangKeys['en']['tp20'] = `Use or attempt to use another’s account without authorization from such user and Virtual Robot or post, upload to, transmit, distribute, store, create or otherwise publish or send through the Services User Content that contains personal information about any person, including, without limitation, names, addresses, email address or credit card information;`;
        aLangKeys['en']['tp21'] = `Develop any third-party applications that interact with User Content or the Services without our prior written consent; or`;
        aLangKeys['en']['tp22'] = `Use any robot, iframe, spider, crawler, scraper or other automated means or interface not provided by us to access the Services, including, without limitation, for the purpose of copying, extracting, aggregating, displaying, publishing or distributing any content or data made available via Services.`;
        aLangKeys['en']['tp23'] = `Some of our Services require or allow you to create an account with us, with a user ID and password. When registering for an account, you agree that you will (a) provide only accurate, complete, and up-to-date information, (b) maintain and promptly update your account information, (c) maintain the confidentiality and security of your username and password, (c) accept all risks and responsibility associated with any authorized or unauthorized access to your account, and (d) immediately notify Virtual Robot if you discover or otherwise suspect any unauthorized use of your account.`;
        aLangKeys['en']['tp24'] = `Virtual Robot reserves the right to modify, update or discontinue our Services, or any features or portions thereof, without prior notice. You agree that we can suspend or terminate your right to access our Services at any time for any reason without notice, obligation or liability to you.`;
        aLangKeys['en']['tp25'] = `USE OF THE SERVICES IS AT YOUR SOLE RISK. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY VIRTUAL ROBOT OR ITS REPRESENTATIVES CREATES A WARRANTY. THE SERVICES ARE PROVIDED "AS-IS" WITHOUT WARRANTY OF ANY KIND. VIRTUAL ROBOT DISCLAIMS ALL WARRANTIES WITH RESPECT TO THE SERVICES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTY OF NON-INFRINGEMENT, OR THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIRTUAL ROBOT AND ITS AFFILIATED COMPANIES, LICENSEES, LICENSORS AND CONTRACTORS ("VIRTUAL ROBOT PARTIES") WILL NOT BE LIABLE TO YOU FOR ANY SPECIAL OR CONSEQUENTIAL DAMAGES OF ANY KIND ARISING OUT OF OR RELATING TO YOUR ACCESS, USE, MISUSE, OR INABILITY TO USE THE SERVICES, EVEN IF VIRTUAL ROBOT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY CASE, THE VIRTUAL ROBOT PARTIES’ AGGREGATE LIABILITY TO YOU IN CONNECTION WITH ANY CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES IS LIMITED TO THE AMOUNT (IF ANY) YOU ACTUALLY PAID FOR THE SERVICES THAT ARE THE SUBJECT OF SUCH CLAIM. IF A LAW RESTRICTS OUR ABILITY TO LIMIT LIABILITY OR DISCLAIM WARRANTIES, THE LIMITATIONS LISTED ABOVE MAY NOT APPLY TO YOU. IN THAT CASE, WE LIMIT OUR LIABILITY AND DISCLAIM WARRANTIES TO THE GREATEST EXTENT PERMITTED BY LAW.`;
        aLangKeys['en']['tp26'] = `If the Virtual Robot Parties are subject to any actual or threatened claims, costs, damages, losses, or other liabilities (collectively, "Covered Losses") as a result of your use of any of the Services, or any data, information, or other item you make available through the Services including User Content, then you agree to indemnify the Virtual Robot Parties from all such Covered Losses and any related costs, such as reasonable attorney’s fees.`;
        aLangKeys['en']['tp27'] = `You further agree to indemnify the Virtual Robot Parties for any Covered Losses arising out of or related to: (a) any Submissions you provide; (b) your violation of these Terms; and (c) your violation of any rights of another. Some jurisdictions limit consumer indemnities, so some or all of the indemnity provisions above may not apply to you. If you are obligated to indemnify us, we will have the right, in our sole and unfettered discretion, to control any action or proceeding and determine whether we wish to settle it, and if so, on what terms.`;
        aLangKeys['en']['tp28'] = `Our consumer service department is available to address any concerns you may have regarding the Services. You may contact them by email at `;
        aLangKeys['en']['tp29'] = `Section 11(b) does not apply to any Claim (i) in which a party is attempting to protect its intellectual property rights (such as its patent, copyright, trademark, trade secret, or moral rights, but not including its privacy or publicity rights), or (ii) that may be brought in small claims court.`;
        aLangKeys['en']['tp30'] = `30-Day Right to Opt Out. You have the right to opt out of the provisions of this Section 11 by sending written notice of your decision to opt out to the following email address:`;
        aLangKeys['en']['tp31'] = `within 30 days of installing the Application. You must link the Application to your Virtual Robot Account prior to opting out. Your notice must include your name, contact information and the email address registered to your Virtual Robot Account. If you send this notice including the information required, then Section 11 will not apply to either party. If you do not send this notice, then you agree to be bound by this Section 11.`;
        aLangKeys['en']['tp32'] = `You and Virtual Robot agree that the courts of San José, Costa Rica have exclusive jurisdiction over any appeals of an arbitration award and over any suit between the parties not subject to arbitration. Any dispute between the parties will be governed by this Agreement and the laws of San José, Costa Rica, without giving effect to any conflict of laws principles that may provide for the application of the law of another jurisdiction.`;
        aLangKeys['en']['tp33'] = `If any part of these Terms is determined to be unlawful, void or for any reason unenforceable, then that part will be severed from these Terms, and the rest of the Terms will remain intact. If we do not enforce any provision of these Terms, that will not be considered a waiver of our rights. Any waiver of these Terms must be obtained in a written document signed by an authorized representative of Virtual Robot.`;
        aLangKeys['en']['tp34'] = `We may change these Terms from time to time. If we do, we’ll provide notice of any changes, such as by posting the most recent version on our Services and updating the "Last Updated" date above. You can view the latest Terms any time by clicking the "Terms of Use" link at the bottom of the applicable webpage. We encourage you to check for updates regularly. Your continued use of the Services following any notice we provide will confirm that you have agreed to the amended Terms. If you do not agree to the amended Terms, you must stop using the Services.`;

        //privacy policy
        aLangKeys['en']['ppt'] = "Virtual Robot privacy policy";
        aLangKeys['en']['pp1'] = "1. Types of information we collect";
        aLangKeys['en']['pp2'] = "2. How we use your information";
        aLangKeys['en']['pp3'] = "3. How your information is shared";
        aLangKeys['en']['pp4'] = "4. Your controls and elections";
        aLangKeys['en']['pp5'] = "5. Information security";
        aLangKeys['en']['pp6'] = "6. Information about children";
        aLangKeys['en']['pp7'] = "7. Changes";
        aLangKeys['en']['pp8'] = "8. Contact information";

        aLangKeys['en']['p1'] = "At Virtual Robot, we know your privacy is very important to you, so please take the time to carefully read our privacy policy. Our policy is designed to help you understand the types of information that we collect, how we use and share the information and how the information is protected. This privacy policy applies to all Virtual Robot services that directly reference or link to this policy, but does not apply to Virtual Robot services that have separate privacy policies that do not incorporate this policy.";
        aLangKeys['en']['p2'] = "Information that you give to us";
        aLangKeys['en']['p3'] = "When you register for and use our services we collect the information that you give to us. This may include information like your name, email address, phone number, date of birth, country of residence, language, gender, and time zone.";
        aLangKeys['en']['p4'] = "Information we collect when you use our services";
        aLangKeys['en']['p5'] = "We also collect and process information about your use of our services. This can include information about your device, your location, your interaction with our services and other Virtual Robot users, your content and your purchases.";
        aLangKeys['en']['p6'] = "Information about your device";
        aLangKeys['en']['p7'] = "When you use our services we may collect specific information about your device, and across your devices, such as the product model, serial number, operating system, device settings, device performance, Internet service provider, IP address and other unique identifiers.";
        aLangKeys['en']['p8'] = "Location information";
        aLangKeys['en']['p9'] = "With your consent, we may collect and process information about your precise location. When we have your location information, we use it to tailor our services for you and others, like helping you establish friend relationships with other Virtual Robot users or telling your existing friends that you are nearby.";
        aLangKeys['en']['p10'] = "Information about your use of our services";
        aLangKeys['en']['p11'] = "We collect certain information about your interaction with our services or with other Virtual Robot users through our services. This could include information about your gameplay, your online status, your service use history, your connections with other Virtual Robot users and the content that you share with them.";
        aLangKeys['en']['p12'] = "Your content";
        aLangKeys['en']['p13'] = "Our services may allow you to create, upload or share content such as text, images, audio, video, or other content that you create or is licensed to you. When you use any of our services that include these or other similar capabilities we may collect your content in accordance with our user agreements or terms of use and this policy.";
        aLangKeys['en']['p14'] = "Your purchases";
        aLangKeys['en']['p15'] = "Some of our services allow you to make purchases. If you use any of our services to make a purchase, we may collect information about the purchase. This could include payment information, such as your credit card number, account authentication information and contact information like your billing and shipping address.";
        aLangKeys['en']['p16'] = "We use the information that you give us and the information we collect to deliver, maintain and improve our services. We also use this information to provide you with services that you request, develop new services, suggest personally relevant features, offer you customized content, provide you with tailored advertising, protect Virtual Robot and our users, and investigate and prevent activities that are potentially illegal or that violate our user agreements or terms of use.";
        aLangKeys['en']['p17'] = "Whenever you contact us, we use the information that you provide to us to help resolve issues you might be having when you use our services. We also use information, such as your email address, to respond to you when you contact us, to let you know about changes to our policies and terms, to let you know about changes or improvements to our services and to inform you about other services that we offer.";
        aLangKeys['en']['p18'] = `We may use cookies, or other similar technologies, on some of the features of our services. Cookies are small files that are typically downloaded to the browser application on your device. Cookies help us to ensure the safety and smooth functioning of certain features of our services and they also help us to collect information about your user preferences. We sometimes use information collected from cookies to improve your user experience and the quality of our services. For example, by saving your user preferences, we may be able to customize our services in ways that you prefer. You may be able to disable cookies in your browser settings or set your browser to alert you when cookies are being used. If you disable cookies, you may not be able to use all of the features of our services. Some web browsers may transmit "do not track" signals. We currently do not take action in response to these signals.`;
        aLangKeys['en']['p19'] = `Analytics providers are third-party companies that collect information when you use some of our services. These companies use cookies, web beacons, and similar technologies to collect and analyze crash reports, keep track of what content or ads you view, how long you spend on different pages, how you arrived on a particular page and how you respond to the ads we show you. Analytics providers may combine the information they collect from our services with other information they collect from other sites and services. The practices of these third-party analytics providers are governed by their own privacy policies. Some of these companies, may give users choices about how they collect and use your information.`;
        aLangKeys['en']['p20'] = `We may share your information for legal and business purposes, such as complying with legal process, responding to claims or inquiries, enforcing our terms, or protecting the rights, property or personal safety of our operations, our users, or the public. Your information may also be shared as part of any sale or transfer of company assets, if legally permitted.
        If you choose to connect with a third-party service through our services, we may share your information with that service and that service may share your information with us. The use of your information, and the use of cookies, web beacons, or other technologies, by these third-party providers is subject to their own privacy policies.`;
        aLangKeys['en']['p21'] = `Some of our services allow you to share information and content with others. When you decide to use these services, the information or content that you share, your online status, and your gameplay information may be visible to Virtual Robot and its trusted business partners, other Virtual Robot users, and in some cases the public. Please keep in mind, when you use these service, that the information and content that you choose to share can be read, collected, or used by others. You are fully responsible for the information and content that you choose to share in these instances.`;
        aLangKeys['en']['p22'] = `We may offer you certain controls and choices regarding the information we collect, how the information is used, and how it is shared. These controls and choices may include the ability to update, correct or delete information that you have provided to us or information that we have collected through your use of our service. They may also include the ability to opt-out of receiving notifications, promotions, offers or other advertising from us.`;
        aLangKeys['en']['p23'] = "We have implemented administrative, physical and technical security measures that are designed to protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration and destruction. You should understand though that, despite our efforts, no security can be guaranteed as impenetrable.";
        aLangKeys['en']['p24'] = "We do not knowingly collect, use or share personal information from children under the age of 13 without verifiable parental consent or as permitted by law. Where a parent or legal guardian has provided consent, the child may be able to use his or her Virtual Robot Account to play certain third-party games and applications that are not published by Virtual Robot. Parents or guardians may review, modify, or delete the child’s personal information, or withdraw consent, by contacting us using the contact information provided at the end of this privacy policy, and may manage which third-party games and applications can access and use the child’s Virtual Robot Account information through parental controls.";
        aLangKeys['en']['p25'] = `Virtual Robot may update this privacy policy from time to time. When we update it, we will revise the "Last Updated" date above. If we make material changes in the way we collect, use, retain or share your personal information, we will notify you by sending you an email at the last email address that you provided us, or by posting notice of the changes on the services covered by this privacy policy.`;
        aLangKeys['en']['p26'] = `If you have any questions, concerns or comments regarding this privacy policy, or any of our privacy practices, please contact us via email at`;
        
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
                    replaceImages();
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
    //$("#liInicio").hover();
    
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
    
    //SIDEBAR LISTENER
    const sidebarButton = document.getElementById('sidebar-target')
    console.log(sidebarButton);

    if (sidebarButton) {
        sidebarButton.addEventListener('click', () => {
            if (locked) {
                return
            }
            locked = true
            if (sidebarOpen) {
                sidebarOpen = closeSidebar();
            } else {
                sidebarOpen = openSidebar();
            }
            locked = false
            console.log("sidebar open",sidebarOpen);
        });
        
    }
});
//para obtener el nombre de nuestra pagina actual y asi asignar las uris
function getPageName(currLocation){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    page.split('#');
    return page;
}

//para concatenar footer
function appendFooter(termsUri,policyUri){
    const htmlFooter = `<hr class="featurette-divider">
    <div class="container ">

        <div class="row ">

            <div class="col-2 col-lg-1 offset-lg-5 offset-3">
                <a href="https://www.facebook.com/robotvirtual/">
                    <i  class="fa text-muted social-icons">&#xf082;</i>
                </a>
            </div>
            <div class="col-2  col-lg-1">
                <a href="https://twitter.com/robotvirtual">
                    <i class="fa text-muted social-icons">&#xf099;</i>
                </a>
            </div>
            <div class=" col-2  col-lg-1">
                <a href="http://instagram.com/robotvirtual">
                    <i class="fa text-muted social-icons">&#xf16d;</i>
                </a>
            </div>
        </div>
        <div class="row text-center">
            <div id="footer-p" class="text-center">
                <p class="text-muted">
                    <p style="margin: 0; padding: 0; text-decoration: none; display: inline; font-size:0.8rem;" key="copyright" class="text-muted tr">
                        © 2016 - 2018 Virtual Robot®. Biowiza S.A. Todos los derechos reservados. Costa Rica. Puedes revisar nuestros
                    </p>
                    <a style="font-size:0.8rem;" class="links tr" key="legal-terms" href="`+termsUri+`">Términos de Uso </a>
                    <p style="margin: 0; padding: 0; text-decoration: none; display: inline; font-size:0.8rem;" key="and" class="text-muted tr">
                        y
                    </p>
                    <a style="font-size:0.8rem;" class="links tr" key="legal-policy" href="`+policyUri+`">
                        Política de Privacidad</a> .
                </p>
            </div>

        </div>
    </div>`;
    $("#targetFooter").append(htmlFooter);
}

//para concatenar nav
function appendMainNav(logo,homeUrl, newsUrl,olliekUrl){
    const htmlNav = `<button id="sidebar-target" class="navbar-toggler" type="button" aria-controls="navbarToggler"
        aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>
  
       <!-- Brand/logo -->
       <a class="navbar-brand mx-auto" href="`+homeUrl+`">
           <img class="d-block" id="navBarBrand" src="`+logo+`" alt="Logo">
       </a>

       <div class="collapse navbar-collapse" id="navbarToggler">
           <!-- Links -->
           <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
               <li class="nav-item" id="liInicio">
                   <a id="aInicio" class="nav-link tr" key="home"  href="`+homeUrl+`">Inicio</a>
               </li>
               <li class="nav-item ">
                   <a id="aNoticias" class="nav-link tr" key="news"  href="`+newsUrl+`">Noticias</a>
               </li>
               <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle tr" key="products" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                       Productos
                   </a>
                   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                       <a class="dropdown-item" href="`+olliekUrl+`">Ollie Keyboard</a>
                     </div>
               </li>
           </ul>
            <!--
           <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
               <li class="nav-item">
                   <a class="nav-link tr" key="sign-in" id="registro-btn" href="#">
                       <i class="fa fa-user-o navbar-toggler border-0" style="padding-left: 0%" aria-hidden="true">			
                       </i>
                       Registro
                   </a>
               </li>
           </ul>
           -->
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
                    <a class="nav-link " href="`+olliekUrl+`"> <img id="ollie-kb-icon" class="icon-img"  src="https://gdurl.com/Drb8" alt="">Ollie Keyboard</a>
                </li>
            </ul>
        </ul>
        <!--
        <ul id="login" class="nav navbar-nav">
            <li class="nav-item">
                <a class="nav-link tr" key="log-in" id="registro-btn" href="#" onclick="login()">
                    <i class="fa fa-user-o navbar-toggler border-0" style="padding-left: 0%" aria-hidden="true">
                    </i>
                    Ingresar
                </a>
            </li>
        </ul>
        -->
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

function currentActivePage(pageName) {
    switch (pageName) {
        case "Noticias.html":
            $("#aNoticias").addClass("active-page");
            break;
        case "TerminosUso.html":
        case "PoliticaPrivacidad.html":

            break;
        case "OllieKeyboardnews.html":

        break;
        default:
            $("#aInicio").addClass("active-page");
            break;
    }
}

function removeActive(){
    $(".nav-link").removeClass("active-page");
    //$("#aNoticias").removeClass("active-page");
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
function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function openSidebar(){
    //sidebarOpen = true
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
    
    return true
}

function closeSidebar(){
    //sidebarOpen = false

    const body = document.getElementsByTagName("body")[0];
    const contents = document.getElementById("menu-contents");
    contents.style.display = 'none';
    body.appendChild(contents);
    
    const menuContainer = document.getElementById('menu-container');

    menuContainer.removeEventListener('click', onMenuBackdropClicked);
    body.removeChild(menuContainer);
    
    return false;
}

function onMenuBackdropClicked(){
    sidebarOpen = closeSidebar();
    console.log(sidebarOpen);
    
}
//reemplazo por imagenes a ingles
function replaceImages() {
    let enOllieKSliderAdd = "images/English/DesktopSlider_OllieKeyboardAd.png";
    let enOllieKNew = "images/English/OllieKeyboardNews.png"
    //mobile
    let EnMobSliderOllieKeyboardAd = "images/English/Mobile/MobileSlider_OllieKeyboardAd.png";
    let EnMobSliderOllieCharacters = "images/English/Mobile/Slider_OllieCharacters.png";
    let EnMobSliderOllieFubolin = "images/English/Mobile/SliderOlliePersonajesFutbolin.png";
    //new previewe
    let enOllieKNewPreview = "images/English/OllieKeyboardMainWebsitePreview.png"
    /*#innews-ollie-k-preview */
    $("#ollie-k-preview").attr("src", enOllieKNewPreview);
    $("#innews-ollie-k-preview").attr("src", "../"+enOllieKNewPreview);
    //index
    if ($(window).width() > 739) {
        $("#secondSlide").attr("src", enOllieKSliderAdd);
    } else {
        $("#firstSlide").attr("src", EnMobSliderOllieCharacters);
        $("#secondSlide").attr("src", EnMobSliderOllieKeyboardAd);
        $("#thirdSlide").attr("src", EnMobSliderOllieFubolin);
    }

}


/*
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
        console.log(sidebarButton);
        
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
})();*/