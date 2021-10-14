const floatButton = (floatBtn) => {
    let btn = document.querySelector(floatBtn);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            btn.classList.add("floatBtn");
            btn.innerHTML = `<img src="assets/telegram.svg" alt="telegram">`;
        } else if (window.scrollY < 700){
            btn.classList.remove("floatBtn");
            btn.innerHTML = "Телеграм канал"
        }

    }, {passive: true})
}

export default floatButton;
