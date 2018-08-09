var app = {};

app.flickity = function() {
	$('.main-carousel').flickity({
		imagesLoaded: true,
		percentPosition: false,
		resize: false,
		cellAlign: 'left',
		autoPlay: true
	});
};

app.init = function(){
	app.flickity();
};

$(function(){
	app.init();
});