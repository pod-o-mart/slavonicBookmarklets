

//https://stackoverflow.com/a/6304320
/*
var images = document.getElementsByTagName("p");
var i;

for(i = 0; i < images.length; i++) {
    images[i].className += " cyrs";
}
*/
//https://stackoverflow.com/q/26959219
var a = document.getElementsByTagName('*')
for (i = 0; i < a.length; i++) {
	a[i].classList.add('cyrs');
	a[i].classList.remove('cyrl');
	a[i].classList.remove('glag');
}
//https://www.javascripttutorial.net/javascript-dom/javascript-style/
var b = document.getElementsByTagName('*')
for (j = 0; j < b.length; j++) {
	b[j].style.setProperty('font-family', '"Fedorovsk Unicode","Fedorovsk Unicode TT","Menaion Unicode","Menaion Unicode TT","Monomakh Unicode","Monomakh Unicode TT","Ponomar Unicode","Ponomar Unicode TT",KurKlim,Vikidemia,Bukyvede,"Kliment Std",Dilyana,Menaion,"Menaion Medieval",Lazov,"Segoe UI","Noto Sans","Noto Serif","Arial Unicode MS"', 'important');
}


