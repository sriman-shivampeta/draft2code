jQuery(document).ready(function () {
  jQuery("#nanoGallery").nanoGallery({
  	items:[
    	{
					src: 'image_01.jpg',		// image url
					srct: 'image_01ts.jpg',	// thumbnail url
					title: 'image 01'       // thumbnail title
			},
			{ src: 'http://www.planwallpaper.com/static/images/6768666-1080p-wallpapers.jpg', srct: 'image_02t.jpg', title: 'image 02' },
      { src: 'http://www.intrawallpaper.com/static/images/thor_2_the_dark_world-1920x1080.jpg', srct: 'image_03ts.jpg', title: 'image 03' }
		],
    thumbnailWidth: 'auto',
  	thumbnailHeight: 100,
    thumbnailHoverEffect: 'borderLighter,imageScaleIn80',
    itemsBaseURL: 'http://nanogallery.brisbois.fr/demonstration/',
		locationHash: false
  });
});