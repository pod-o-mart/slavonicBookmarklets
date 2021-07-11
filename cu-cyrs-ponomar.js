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
	a[i].style.setProperty('font-family', '"Monomakh Unicode","Ponomar Unicode","Pochaevsk Unicode","Triodion Unicode","Acathist","Fedorovsk Unicode",KurKlim,Bukyvede,"Kliment Std",Dilyana,"Menaion Unicode",Lazov');
}


var b = document.getElementsByClassName('glag')
for (j = 0; j < b.length; j++) {
	b[j].style.setProperty('font-family', '"Shafarik","Menaion Unicode","Noto Sans Glagolitic","Segoe UI Historic","Segoe UI Symbol"', 'important');
}

