"use strict";

(function() {

     window.onload = function() {
        getImage();
        $("random").onclick = getImage;
     };

     function getImage() {
       let random = Math.floor(Math.random() * 42) + 1;
       let src = "images/" + random + ".jpg";
       $("container").style.backgroundImage = "url('" + src + "')";

     }

	function $(id) {
		return document.getElementById(id);
	}
})();
