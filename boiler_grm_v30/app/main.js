/**
 * 
 */
const initDetailsEvents = () => {
    const cards = document.querySelectorAll(".card");
    const modalWindow = document.querySelector(".modal_window");

    for (const card of cards) {
        const detailsButton = card.querySelector(".details_button");
        const title = card.querySelector(".card_tittle").innerText;
        const subtitle = card.querySelector(".card_subtitle").innerText;
        const price = +card.querySelector(".price").innerText.replace(",", ".");
        const id = card.dataset.identifier;
        const sale = card.dataset.sale;
        const pictureSrc = card.querySelector(".card_picture img").src;

        if (detailsButton) {
            detailsButton.addEventListener("click", (ev) => {
                modalWindow.querySelector(".title").innerText = title;
                modalWindow.querySelector(".Subtitle").innerText = subtitle;
                modalWindow.querySelector(".price_number").innerText =
                    price.toFixed(2) + "€";
                modalWindow.querySelector(".offer").innerText =
                    sale + "% de descuento exclusivo web";
                modalWindow.querySelector(".window_pic img").src = pictureSrc;

                modalWindow.classList.add("oppened");
            });
        }
    }
};

/**
 * 
 */
const modalWindowCloseEvent = () => {
    const modalWindow = document.querySelector(".modal_window");
    const modalWindowCloseButton = modalWindow.querySelector(".close_icon");
    modalWindowCloseButton.addEventListener("click", (ev) => {
        modalWindow.classList.remove("oppened");
    });
};

initDetailsEvents();
modalWindowCloseEvent();
