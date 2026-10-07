// ==============================
// МОБИЛЬНОЕ МЕНЮ
// ==============================

function toggleMenu() {

    const menu = document.querySelector(".menu");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "78px";
        menu.style.left = "0";
        menu.style.width = "100%";
        menu.style.background = "white";
        menu.style.padding = "25px";

    }
}


// ==============================
// ФОРМА ЗАПИСИ
// ==============================

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    alert(
        "Спасибо, " + name + "!\n\n" +
        "Ваша заявка принята.\n" +
        "Телефон: " + phone + "\n" +
        "Услуга: " + service + "\n\n" +
        "Администратор свяжется с вами."
    );

    form.reset();

});