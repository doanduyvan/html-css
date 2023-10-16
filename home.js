let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
autoSlide();

function plusSlides(n) {
    clearInterval(slideInterval); // Xóa interval khi người dùng chuyển slide bằng nút
    showSlides(slideIndex += n);
    autoSlide(); // Khởi tạo interval sau khi chuyển slide
}

function currentSlide(n) {
    clearInterval(slideInterval); // Xóa interval khi người dùng chuyển slide bằng nút
    showSlides(slideIndex = n);
    autoSlide(); // Khởi tạo interval sau khi chuyển slide
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlide() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 3000); // Thời gian chuyển slide: 2 giây
}

// 

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        var isActive = this.classList.contains("active");

        // Đóng tất cả các section khác
        for (var j = 0; j < accordions.length; j++) {
            accordions[j].classList.remove("active");
            accordions[j].nextElementSibling.style.display = "none";
        }

        // Mở section hiện tại nếu đang đóng, đóng nếu đang mở
        if (!isActive) {
            this.classList.add("active");
            content.style.display = "block";
        } else {
            this.classList.remove("active");
            content.style.display = "none";
        }
    });
}