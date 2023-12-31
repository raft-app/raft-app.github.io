/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    const pub = "-----BEGIN PUBLIC KEY-----\n" +
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDeeGw2caAkVZjkCiUCgx8Szxyd\n" +
        "rxttgO93XW4r+ngGicPIh79sRXwb1Q1aqBihPCDaCmDVNb4AC2YtL4rv3DhgRMPm\n" +
        "EJOmMyMeZhrWvWlhvXVJpL5t8QGGDY+jJjSACVjdW9DjliJDE1rCbMoDXLEZn/Uf\n" +
        "6vVgVYHSaUIaEApWhwIDAQAB\n" +
        "-----END PUBLIC KEY-----"
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.body.querySelector('#betaForm').addEventListener("submit", function(e){
        // if(!isValid){
        //     e.preventDefault();    //stop form from submitting
        // }
        //
        const d = new Date();
        const text = d.toISOString();
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(pub);
        document.body.querySelector('#betaForm #signature').value=encrypt.encrypt(text);
        // const formData = new FormData(e.target)


        // console.log(...formData);

        // e.preventDefault();
    });
    const url = new URL(window.location.href);

    if (url.searchParams.has('thanks')) {
        const thanksAlert = document.body.querySelector('#thanks')
        thanksAlert.classList.remove("hide");
        thanksAlert.classList.add("show");
    }

});
