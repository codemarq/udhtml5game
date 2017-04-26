var canvas = null;

function setup () {
	// Grab the body element using document.getElementById,
	// assume the body element has an id of 'body'.
	var body = document.getElementById('body');
	// Create a canvas element using document.createElement,
	var canvas = document.createElement('canvas');
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

  var ctx = canvas.getContext('2d');

	body.appendChild(canvas);

	// Create a new image with:
	// a 'src' attribute of "/media/img/gamedev/ralphyrobot.png"
	// and an 'onload' attribute of onImageLoad
	var image = document.createElement("img");
	image.attr('src', "/media/img/gamedev/ralphyrobot.png");
	image.attr('onload', onImageLoad);
};

onImageLoad = function(){
	// Use the console.log function to print a statement to the browser console.
	// This will print once the image has been downloaded.
	// YOUR CODE HERE
	console.log("image has been downloaded");
};

document.body.appendChild(canvas);
};

setup();