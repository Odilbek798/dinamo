document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item"); // Menyu tugmalarini tanlash
    const contents = document.querySelectorAll(".content");   // Kontent bo‘limlarini tanlash

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            // Avval barcha bo‘limlarni yashirish
            contents.forEach(content => content.classList.add("hidden"));

            // Tanlangan bo‘limni ko‘rsatish
            const targetId = item.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.remove("hidden");
            } else {
                console.error(`Element topilmadi: #${targetId}`);
            }
        });
    });




    var telegramToken = "7691315439:AAHLNSoGFfvEPaw2DiYgTCQGShMwtqU_tkc";
    var currentChatId =   391813006;
    var formData = new FormData(form);
    var object = {};
    formData.forEach(function (element, value) {
        object[value] = element;
    }); 

    console.log(formData);
    console.log(object);


    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: currentChatId,
            text: `user name is ${object.name} <br/> user phonenumber is ${object.phonenumber}`,
        }),
    });

});
