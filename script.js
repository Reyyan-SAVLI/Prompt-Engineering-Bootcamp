window.onload = function() {
    var footer = document.querySelector('footer');
    var bodyHeight = document.body.offsetHeight;
    var windowHeight = window.innerHeight;
    
    if (bodyHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.left = '0';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    } else {
        footer.style.position = 'relative';
    }
};
