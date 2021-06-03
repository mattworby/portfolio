function changePage(id){
	switch (id){
		case 'resumeNav':
			window.open('https://mattworby.github.io/portfolio/resume/resume.pdf');
			break;
		case 'linkedNav':
			window.open('https://www.linkedin.com/in/mattworby13a87b123/')
			break;
		case 'github':
			window.open('https://github.com/mattworby')
			break;
		default:
			break;
	}
}

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