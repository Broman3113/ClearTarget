const floatButton = (floatBtn) => {
    let btn = document.querySelector(floatBtn);


    window.addEventListener("scroll", () => {
        let bounding = btn.getBoundingClientRect();
        if (window.scrollY > 600) {
            btn.classList.add("floatBtn");
            btn.innerHTML = `<img src="assets/telegram.svg">`;
        } else if (window.scrollY < 700){
            btn.classList.remove("floatBtn");
            btn.innerHTML = "Телеграм канал"
        }

    })
}

export default floatButton;
