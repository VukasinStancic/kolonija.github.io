let slideIndex = 0; 

function showSlide() {
    let slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}

    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(n) {
    slideIndex += n;
    showSlide();
}

/*document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1); 
});

document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1); 
});*/

showSlide(); 