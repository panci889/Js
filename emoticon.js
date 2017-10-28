/*----*/
var IMG_GOOGLE_SITE = "<img style='border:0;padding:0' alt='expression' title='expression' src='https://sites.google.com/site/kirimpesan24/";
	
document.getByClassName = function(className){
    var aReturn = new Array();
    var elements = document.getElementsByTagName("*");
	var classes;
	var i, j;
	
    for(i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            classes = elements[i].className.split(" ");
            for(j = 0;j < classes.length;j++){
                if(classes[j] == className)
                    aReturn.push(elements[i]);
            }
        }
        else if(elements[i].className == className)
            aReturn.push(elements[i]);
    }
    return aReturn;
}

function loopContent(){
  var def = ['post-body','entry-content','comment-body','comment','comments'];
  var content;
  var i, j;
  
  for(i=0;i<def.length;i++)
  {
	content = document.getByClassName(def[i]);
	for(j=0;j<content.length;j++) {
	   content[j].innerHTML = setEmoticon(content[j].innerHTML);
	}
  }
}

function setEmoticon(s){
	s = s.replace(/&gt;=\)/g, IMG_GOOGLE_SITE + "19.gif'/>");	// >=)
	s = s.replace(/o:\)/ig, IMG_GOOGLE_SITE + "25.gif'/>");	// o:)
	s = s.replace(/\\:D\//ig, IMG_GOOGLE_SITE + "69.gif'/>");	// \:D/
	s = s.replace(/&gt;:O/ig, IMG_GOOGLE_SITE + "14.gif'/>");	// >:O
	s = s.replace(/:'\(/ig, IMG_GOOGLE_SITE + "20.gif'/>");	// :'(
	s = s.replace(/;\)/g, IMG_GOOGLE_SITE + "3.gif'/>");	// ;)
	s = s.replace(/:\)\)|=\)\)/g, IMG_GOOGLE_SITE + "24.gif'/>"); // =))
	s = s.replace(/:\)|=\)/g, IMG_GOOGLE_SITE + "1.gif'/>"); 	// :)
	s = s.replace(/:\(|=\(/g, IMG_GOOGLE_SITE + "2.gif'/>");	// :(
	s = s.replace(/:D/g, IMG_GOOGLE_SITE + "4.gif'/>");	// :D
	s = s.replace(/=D/g, IMG_GOOGLE_SITE + "21.gif'/>");	// =D
	s = s.replace(/:p|=p/ig, IMG_GOOGLE_SITE + "10.gif'/>");	// :P
	s = s.replace(/x_x/ig, IMG_GOOGLE_SITE + "109.gif'/>");	// X_X
	s = s.replace(/:o|=o/ig, IMG_GOOGLE_SITE + "13.gif'/>");	//:O
	s = s.replace(/\(y\)/ig, IMG_GOOGLE_SITE + "113.gif'/>");	// (y)
	s = s.replace(/\(n\)/ig, IMG_GOOGLE_SITE + "112.gif'/>");	// (n)
	s = s.replace(/:\*/g, IMG_GOOGLE_SITE + "11.gif'/>");	// :*
	s = s.replace(/#:-s/ig, IMG_GOOGLE_SITE + "18.gif'/>");	//	#:-s
	s = s.replace(/:&amp;|=&amp;/g, IMG_GOOGLE_SITE + "31.gif'/>");	// 	:&
	s = s.replace(/B-\)/ig, IMG_GOOGLE_SITE + "16.gif'/>");	// B-)
	s = s.replace(/\(\*\)/g, IMG_GOOGLE_SITE + "79.gif'/>");	// (*)
	s = s.replace(/&lt;3&lt;3/g, IMG_GOOGLE_SITE + "8.gif'/>");	// <3<3
	s = s.replace(/&lt;\\3/g, IMG_GOOGLE_SITE + "12.gif'/>");	// <\3
	s = s.replace(/~o\)/ig, IMG_GOOGLE_SITE + "57.gif'/>");	// ~o)
	s = s.replace(/\\m\//ig, IMG_GOOGLE_SITE + "111.gif'/>");	// \m/
	s = s.replace(/&lt;:-P/ig, IMG_GOOGLE_SITE + "36.gif'/>");	// <:-P
	s = s.replace(/\({}\)/ig, IMG_GOOGLE_SITE + "6.gif'/>");	// ({})
	s = s.replace(/\=\-c/ig, IMG_GOOGLE_SITE + "101.gif'/>");	// =-c
	s = s.replace(/@};-/g, IMG_GOOGLE_SITE + "53.gif'/>");	// @};-
	s = s.replace(/&gt;:\//g, IMG_GOOGLE_SITE + "27.gif'/>");	// >:/
	s = s.replace(/:\|/g, IMG_GOOGLE_SITE + "22.gif'/>");	// :|
	s = s.replace(/:salut:/g, IMG_GOOGLE_SITE + "77.gif'/>");	// :salut:
	s = s.replace(/:gakboleh:/g, IMG_GOOGLE_SITE + "68.gif'/>");	// :gakboleh:
	return s;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(function(){
	loopContent();
});