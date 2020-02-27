// MASTERSLIDER Script
var slider = new MasterSlider();

    slider.control("arrows", {autohide:false});
    slider.control("bullets", {autohide:false});

    slider.setup("masterslider", {
        width:1000,
        height:10,
        centerControls:false,
        space:5,
        layout:"fillwidth",
        autoHeight:true,
        loop:true
    });
