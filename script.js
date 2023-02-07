const starsElement = document.querySelectorAll('.fa-star');
const emojisElement = document.querySelectorAll('.fa-regular');
const colors = ["red", "orange", "lightblue", "lightgreen", "green"];

// at start bad is selected by default
updateRating(0);

starsElement.forEach((element, index) => {
    element.addEventListener('click', () => {
        updateRating(index);
    });
});

function updateRating(index) {
    // for (let i = 0; i < starsElement.length; i++) {
    //     if (i <= index) {
    //         starsElement[i].classList.add('active');
    //     } else {
    //         starsElement[i].classList.remove('active');
    //     }
    // }
    starsElement.forEach((element, i) => {
        if (i < index + 1) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })

    emojisElement.forEach((element) => {
        element.style.transform = `translateX(-${index * 50}px)`;
        element.style.color = colors[index];
    })
}