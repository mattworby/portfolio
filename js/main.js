function showText(item,show){
	switch(item){
		case 'twitch':
			if(show == 'show'){
				document.getElementById('workTwitchText').style.display = 'block';
			} else {
				document.getElementById('workTwitchText').style.display = 'none';
			}
			break;
		case 'cat':
			if(show == 'show'){
				document.getElementById('workCatText').style.display = 'block';
			} else {
				document.getElementById('workCatText').style.display = 'none';
			}
			break;
		case 'equation':
			if(show == 'show'){
				document.getElementById('workEquationText').style.display = 'block';
			} else {
				document.getElementById('workEquationText').style.display = 'none';
			}
			break;
	}
}

function openMobileMenu(){
	var background = document.getElementById("mobileNav").style.backgroundImage;
	if (background == 'url("images/mobile/hamburger.png")'){
		document.getElementById("mobileNav").style.backgroundImage = "url(images/mobile/cross.png)";
		document.getElementById("mobileNav").style.zIndex = "99";
		document.getElementById("mobileNavMenu").style.display = "block";
	} else if (background == 'url("images/mobile/cross.png")'){ 
		document.getElementById("mobileNav").style.backgroundImage = "url(images/mobile/hamburger.png)";
		document.getElementById("mobileNavMenu").style.display = "none";
	} else if (background == 'url("../images/mobile/hamburger.png")'){
		document.getElementById("mobileNav").style.backgroundImage = "url(../images/mobile/cross.png)";
		document.getElementById("mobileNav").style.zIndex = "99";
		document.getElementById("mobileNavMenu").style.display = "block";
	} else if (background == 'url("../images/mobile/cross.png")'){
		document.getElementById("mobileNav").style.backgroundImage = "url(../images/mobile/hamburger.png)";
		document.getElementById("mobileNavMenu").style.display = "none";
	} else if (background == 'url(https://mattworby.github.io/portfolio/images/mobile/hamburger.png)'){
		document.getElementById("mobileNav").style.backgroundImage = "url(https://mattworby.github.io/portfolio/images/mobile/cross.png)";
		document.getElementById("mobileNavMenu").style.display = "block";
	} else if (background == 'url(https://mattworby.github.io/portfolio/images/mobile/cross.png)'){
		document.getElementById("mobileNav").style.backgroundImage = "url(https://mattworby.github.io/portfolio/images/mobile/hamburger.png)";
		document.getElementById("mobileNavMenu").style.display = "none";
	}
}