/* HTML5 elements for IE
* more reference from: http://remysharp.com/2009/01/07/html5-enabling-script/
*/
 
'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){
	document.createElement(n);
});