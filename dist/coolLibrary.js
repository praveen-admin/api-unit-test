(function() {
	'use strict';
	var n = document.createElement('div');
	n.style.backgroundColor = 'tealss';
	n.style.width = '250px';
	n.style.height = '250px';
	n.setAttribute('foo', 'bar');
	n.classList.add('box');
	document.body.appendChild(n);
})();