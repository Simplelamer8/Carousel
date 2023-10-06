const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const left_btn = document.querySelector(".left_btn");
const right_btn = document.querySelector(".right_btn");
const nav = document.querySelector(".carousel__nav")
const indexes = Array.from(nav.children);

const slideSize= slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

for (let i = 0; i < slides.length; i++)
{
    slides[i].style.left = slideWidth * i + "px";
}

right_btn.addEventListener("click", (e) => {
    const cur_slide = track.querySelector('.current-slide');
    const next_slide = cur_slide.nextElementSibling;

    moveToSlide(track, cur_slide, next_slide);

    const cur_dot = nav.querySelector(".current-slide");
    updateDotes(cur_dot, cur_dot.nextElementSibling);
});

left_btn.addEventListener("click", (e) => {
    const cur_slide = track.querySelector(".current-slide");
    const prev_slide = cur_slide.previousElementSibling;

    moveToSlide(track, cur_slide, prev_slide);
    const cur_dot = nav.querySelector(".current-slide");
    updateDotes(cur_dot, cur_dot.previousElementSibling);
});

const moveToSlide = (track, cur_slide, target_slide) => {
    track.style.transform = "translateX(-" + target_slide.style.left + ")";
    cur_slide.classList.remove("current-slide");
    target_slide.classList.add("current-slide"); 
};

nav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");

    if (!targetDot)
    {
        return;
    }

    const cur_slide = track.querySelector(".current-slide");
    const cur_dot = nav.querySelector(".current-slide");
    const targetIndex = indexes.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, cur_slide, targetSlide);
    updateDotes(cur_dot, targetDot);
});

const updateDotes = (cur_dot, target_dot) => {
    cur_dot.classList.remove("current-slide");
    target_dot.classList.add("current-slide");
}