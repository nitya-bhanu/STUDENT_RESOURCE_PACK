const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05,
    getSpeed: true,
    getDirection: true,
});

var f = document.getElementById('foo');
document.addEventListener('mouseover', function (ev) {
    f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
    f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
}, false);

var Scrollbar = window.Scrollbar;
var options1 = {
    'damping': 0.005,
    'thumbMinSize': 100,
    'speed': 1,
    'renderByPixels': true,
    'alwaysShowTracks': false,
}
Scrollbar.init(document.querySelector('#my-scrollbar'), options1);

