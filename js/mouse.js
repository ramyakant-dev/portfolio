/* 
var lightBulbs = document.querySelectorAll('#light-bulb1, #light-bulb2, #light-bulb3, #light-bulb4');


if ((window.screen.width >= 1024 && window.screen.height >= 768) && !(/Android|webOS|iPad|iPod|iPhone/i.test(navigator.userAgent)) ) {

    for (let i = 0; i < lightBulbs.length; i++) {

        window.addEventListener('mousemove',(e) => {
            var mouseXPosition = e.clientX;
            var mouseYPosition = e.clientY;
            
            lightBulbs[i].style.left = mouseXPosition + "px";
            lightBulbs[i].style.top = mouseYPosition + "px";
        
        });    
    }
    
 } else {
    for (let i = 0; i < lightBulbs.length; i++) {
        lightBulbs[i].style.display = 'none';
    }
 } */