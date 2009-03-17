/* HTML5 elements for IE
* more reference from: http://remysharp.com/2009/01/07/html5-enabling-script/
*/
 
(function(){
	var e = 'abbr article aside audio bb datagrid datalist details dialog eventsource figure footer header mark menu meter nav output progress section time video'.split(' ');
	var i = e.length;
	while (i--) document.createElement(e[i]);
})();