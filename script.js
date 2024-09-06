document.addEventListener("scroll", function() {

    // condition 

    let circle1 = document.querySelector('.circle1');
    let circle2 = document.querySelector('.circle2');
    let scrollTop = window.scrollY;
    // window.screen.height
    circle1.style.transform = `translateY(${scrollTop/2}px)`;
    circle2.style.transform = `translateY(${-scrollTop/2}px)`;    

});

