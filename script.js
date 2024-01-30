const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')
const logoImg = document.querySelector('.img-logo')

const addThemeClass = (bodyClass, btnClass, logoSrc, backgroundColor) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
  logoSrc ? logoImg.src = logoSrc : null
  backgroundColor ? body.style.backgroundColor =  backgroundColor: null
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')
const getLogoSrc = localStorage.getItem('portfolio-logo-src')
const getBackgroundColor = localStorage.getItem('animated-background')

addThemeClass(getBodyTheme, getBtnTheme, getLogoSrc, getBackgroundColor)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass, logoSrc, backgroundColor) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

    addThemeClass(bodyClass, btnClass, logoSrc, backgroundColor)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
	localStorage.setItem('portfolio-logo-src', logoSrc)
	localStorage.setItem('animated-background', backgroundColor)
}

const toggleTheme = () => {
	const theme = isDark() ? { bodyClass: 'light', btnClass: 'fa-moon', logoSrc: 'dark-logo.png',
	                           backgroundColor: '#c7e0ff'
							 } 
						  : { bodyClass: 'dark', btnClass: 'fa-sun', logoSrc: 'light-logo.png',
						      backgroundColor: '#23283e' 
							}
	setTheme(theme.bodyClass, theme.btnClass, theme.logoSrc, theme.backgroundColor);
};

btnTheme.addEventListener('click', toggleTheme)

const menuItem = document.querySelector('.project-link');
const hoverMenu = menuItem.querySelector('.hover-menu');

menuItem.addEventListener('mouseover', () => {
  hoverMenu.style.display = 'block';
});

menuItem.addEventListener('mouseout', () => {
  hoverMenu.style.display = 'none';
});


// Open the modal dialog for the specified video
function openModal(videoId) {
	var modal = document.getElementById('modal-' + videoId);
	modal.style.display = "block";
}
  
// Close the modal dialog for the specified video
function closeModal(videoId) {
	var modal = document.getElementById('modal-' + videoId);
	modal.style.display = "none";
}

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)


$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
});

function toggleProjectsGrid(sectionId) {
	var projectsGrid = document.querySelector(`#${sectionId} .projects__grid`);
	var arrow = document.querySelector(`#arrow-${sectionId}`);
	
	if (window.getComputedStyle(projectsGrid).display === 'none') {
	  projectsGrid.style.display = 'grid';
	  arrow.innerHTML = '▲'; // Up arrow
	} else {
	  projectsGrid.style.display = 'none';
	  arrow.innerHTML = '▼'; // Down arrow
	}
  }

(function($) {
    "use strict";
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit', function() {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });
    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
}
)(jQuery);

// PPH Freelancer Profile Link
// (function(d, s) {
// 	var useSSL = 'https:' == document.location.protocol;
// 	var js, where = d.getElementsByTagName(s)[0],
// 	js = d.createElement(s);
	
// 	js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/3594069130/6637713.js?width=300&height=300&orientation=vertical&theme=light&hourlies=782852&rnd='+parseInt(Math.random()*10000, 10);
// 	try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
// }(document, 'script'));


// function delay() {
//     setTimeout(function() {
//         animatedBackground.resize();
//     }, 200);
// }

// if (document.readyState == 'complete') {
//     delay();
// } else {
//     document.onreadystatechange = function () {
//         if (document.readyState === "complete") {
//             delay();
//         }
//     }
// }


  
