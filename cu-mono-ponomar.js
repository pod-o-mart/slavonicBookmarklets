addCSS('https://sci.ponomar.net/css/fonts.css');
function addCSS(filename){
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('link');
	style.href = filename;
	//style.type = 'text/css';
	style.rel = 'stylesheet';
	head.append(style);
}

var a = document.getElementsByTagName('*')
for (i = 0; i < a.length; i++) {
	a[i].style.setProperty('font-family', '"FiraSlav"', 'important');
}
