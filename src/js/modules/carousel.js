const carousel = (slides, prevTrigger, nextTrigger, panelTrigger, overBg, sheetTrigger, reviewsTrigger, readMoreTrigger) => {
    let slidePosition = 0;
    const items = document.querySelectorAll(slides),
        prev = document.querySelector(prevTrigger),
        next = document.querySelector(nextTrigger),
        panel = document.querySelector(panelTrigger),
        over = document.querySelectorAll(overBg),
        sheet = document.querySelectorAll(sheetTrigger),
        reviews = document.querySelectorAll(reviewsTrigger),
        readMore = document.querySelectorAll(readMoreTrigger);
    const gradientClasses = [
        "gradient--orange",
        "gradient--blue",
        "gradient--purple",
        "gradient--cyan",
        "gradient--pink",
        "gradient--dark-blue"
    ];
    const gradientStyles = [
        "linear-gradient(315deg, rgba(254, 146, 1, 1) 0%, rgba(253, 1, 68, 1) 100%)",
        "linear-gradient(315deg, #081d3f 0%, #1765c8 100%)",
        "linear-gradient(315deg, #221842 0%, #a341d4 100%)",
        "linear-gradient(315deg, #0b3244 0%, #1accd0 100%)",
        "linear-gradient(315deg, #2f1a34 0%, #d33d7f 100%)",
        "linear-gradient(315deg, #131c3c 0%, #4966cd 100%)"
    ];

    next.addEventListener("click", () => {
        updateSlidePosition(1);
    });
    prev.addEventListener("click", () => {
        updateSlidePosition(-1);
    });

    // const isEllipsisActive = e => {
    //     return (e.offsetWidth < e.scrollWidth);
    // }

    const updateSlidePosition = (n) => {
        slidePosition += n;
        if (slidePosition < 0) {
            slidePosition = items.length - 1;
        } else if (slidePosition >= items.length) {
            slidePosition = 0;
        }
        setSlide(slidePosition);
        setBg(slidePosition);
        setSheet(slidePosition);
    }

    const setBg = (n) => {
        over[n].classList.add(gradientClasses[n]);
        next.style.background = `no-repeat center/25px url("../dist/assets/next.svg"), ${gradientStyles[(n + 1 < items.length) ? n + 1 : 0]}`;
    }
    const setSlide = (n) => {
        items.forEach(item => {
            item.classList.remove("carousel-item-active");
        });
        items[n].classList.add("carousel-item-active");
        // if (isEllipsisActive(reviews[n])) {
        //     readMore[n].style.display = "block";
        // }
    }
    const setSheet = (n) => {
        sheet.forEach(item => {
            item.classList.remove("sheet-active");
        })
        sheet[n].classList.add("sheet-active");
    }
    sheet.forEach((item, index) => {
        item.addEventListener("click", () => {
            slidePosition = index;
            setSlide(index);
            setBg(index);
            setSheet(index);
        });
    });
    readMore.forEach((item, index) => {
        item.addEventListener("click", () => {
            let innerModal = document.createElement('p');
            innerModal.classList.add("modal-readMore");
            innerModal.innerHTML = reviews[index].innerHTML;
            document.querySelector(".popup_content").appendChild(innerModal);
        })
    })

    over[0].classList.add(gradientClasses[0]);
    next.style.background = `no-repeat center/25px url("../dist/assets/next.svg"), ${gradientStyles[1]}`;
    setSlide(slidePosition);

    document.querySelector(".carousel").addEventListener('touchstart', handleTouchStart, false);
    document.querySelector(".carousel").addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;
    let yDown = null;
    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if(Math.abs( xDiff )+Math.abs( yDiff )>150){ //to deal with to short swipes

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {/* left swipe */
                    updateSlidePosition(1);
                } else {/* right swipe */
                    updateSlidePosition(-1);
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }

}
export default carousel;
